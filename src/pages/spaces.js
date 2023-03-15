import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router' //added to redirect //next/router wich gives us route.query!
import CreateSpace from '../components/spaces/CreateSpace'
import SpaceList from 'components/spaces/SpaceList'
import { useUser } from '@supabase/auth-helpers-react'
import { useState, useEffect } from 'react'
import Layout from 'components/Layout'

function Spaces() {
	const session = useSession()
	const supabase = useSupabaseClient()
	const user = useUser()
	const router = useRouter()
	const [spaces, setSpaces] = useState('')

	useEffect(() => {
		getSpaceList()
		if (!session) {
			router.push('/') //when navigates to page shows error
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session])

	const addSpaceHandler = async (nameOfSpace) => {
		const { data: spaces, error: spacesError } = await supabase
			.from('spaces')
			.insert([{ name: nameOfSpace }])
			.select()

		if (spacesError) {
			console.log(spacesError)
			return
		}

		const { data: userCreated, error: userCreatedError } = await supabase
			.from('space_members')
			.insert({
				member_email: user.email,
				space_id: spaces[0].id,
				is_admin: true,
				user_id: user.id // set the user_id column to the ID of the authenticated user
			})

		if (userCreatedError) {
			console.error(userCreatedError)
		} else {
			console.log('New member added successfully!')
		}

		getSpaceList()
	}

	async function getSpaceList() {
		if (!session) {
			return
		}

		const { data: spaceMembers, error: spaceMembersError } = await supabase
			.from('space_members')
			.select('space_id, member_email')
			.eq('member_email', user.email)

		if (spaceMembersError) {
			console.error(spaceMembersError)
			return
		}

		const spaceIds = spaceMembers.map((member) => member.space_id)

		const { data: spaces, error: spacesError } = await supabase
			.from('spaces')
			.select('id, name')
			.in('id', spaceIds)

		if (spacesError) {
			//console.error(spacesError)
			return
		}

		const spaceNames = spaces.map((space) => ({
			id: space.id,
			name: space.name
		}))
		setSpaces(spaceNames)
	}

	if (!spaces) {
		return //when navigates to page shows error
	}
	return (
		//layout insert
		<Layout>
			<div className="container">
				<>
					<CreateSpace
						session={session}
						user={user}
						addSpace={addSpaceHandler}
					/>
					<SpaceList
						session={session}
						user={user}
						spaces={spaces}
					/>
				</>
			</div>
		</Layout>
	)
}

export default Spaces
