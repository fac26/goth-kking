import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router' //added to redirect //next/router wich gives us route.query!
import CreateSpace from '../components/spaces/CreateSpace'
import SpaceList from 'components/spaces/SpaceList'
import { useUser } from '@supabase/auth-helpers-react'
import { useState, useEffect } from 'react'

function HomePage() {
	const session = useSession()
	const supabase = useSupabaseClient()
	const user = useUser()
	const router = useRouter()

	const [spaces, setSpaces] = useState('')

	const addSpaceHanler = async (nameOfSpace) => {
		const spacesResponse = await supabase
			.from('spaces')
			.insert([{ name: nameOfSpace }])
			.select()

		if (spacesResponse.error) {
			//console.log(spacesResponse.error)
			return
		}
		console.log(spacesResponse.data[0].id)

		const userCreatedResponse = await supabase.rpc('add_member', {
			email: user.email,
			space_id: spacesResponse.data[0].id,
			nick_name: '',
			is_admin: true
		})

		console.log(userCreatedResponse)

		getSpaceList()
		//router.push('/tasks')
	}

	useEffect(() => {
		getSpaceList()
		if (!session) {
			router.push('/') //when navigates to page shows error
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session])

	async function getSpaceList() {
		console.log(user, ' line 54')
		if (!session) {
			return
		}

		//we pass second second arg to rpc {email:user.email}, this is how we can add args to function we defined as get_spaces(email)
		const currentUserMemberOfList = await supabase.rpc('get_spaces', {
			email: user.email
		})

		const spaceNames = currentUserMemberOfList.data.map((spaceObj) => ({
			name: spaceObj.name,
			id: spaceObj.id
		}))

		setSpaces(spaceNames)
	}

	if (!spaces) {
		return //when navigates to page shows error
	}
	return (
		//layout insert
		<div className="container">
			{session ? (
				<>
					<CreateSpace
						session={session}
						user={user}
						addSpace={addSpaceHanler}
					/>
					<SpaceList
						session={session}
						user={user}
						spaces={spaces}
					/>
					<button
						className="button block"
						onClick={() => supabase.auth.signOut()}>
						Sign Out
					</button>
				</>
			) : null}
			{/**add list of this user spaces */}
		</div>
	)
}

export default HomePage