import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router' //added to redirect //next/router wich gives us route.query!
import CreateSpace from '../components/spaces/CreateSpace'
import Account from 'components/Account'
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

		const userCreatedResponse = await supabase //{data, error} =>userCreatedResponse.data
			.from('space_members')
			.insert([
				{
					member_email: user.email,
					space_id: spacesResponse.data[0].id,
					is_admin: true
				}
			])
			.select()
		if (userCreatedResponse.error) {
			//console.log(userCreatedResponse.error)
			return
		}
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
		const currentUserMemberOfList = await supabase.rpc('get_all_spaces', {
			email: user.email
		})

		const spaceNames = currentUserMemberOfList.data.map((spaceObj) => ({
			name: spaceObj.name,
			id: spaceObj.id
		}))

		setSpaces(spaceNames)
	}

	if (!spaces) {
		console.log(spaces)
		return //when navigates to page shows error
	}
	return (
		//layout insert
		<div className="container">
			{session ? (
				<>
					<Account session={session}/>
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
