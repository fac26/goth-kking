import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import Layout from 'components/Layout'
import AddMember from 'components/members/AddMember'
import { useRouter } from 'next/router'
import ListOfMembers from 'components/members/ListOfMembers'
import { Auth } from '@supabase/auth-ui-react'
import { useState, useEffect } from 'react'

export default function Members() {
	const user = useUser()
	const session = useSession()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1) //this doesn't give anything
	const pathArr = router.asPath.split('/')

	const [members, setMembers] = useState('')

	useEffect(() => {
		getMembersBySpaceId(pathArr[1])
		//getSpaceTasks()
		if (!session) {
			router.push('/') //when navigates to page shows error
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session, pathArr[1]])

	const addNewMemberHandler = async (member) => {
		const newMember = {
			member_email: member.memberEmail,
			space_id: pathArr[1]
		}
		console.log(newMember)
		const { data, error } = await supabase
			.from('space_members')
			.insert([newMember])
			.select()
		if (error) {
			console.error(error)
		} else {
			const newMember = {
				id: data[0].id,
				email: data[0].member_email
			}
			setMembers((prevMembers) => [...prevMembers, newMember])
		}
	}

	const getMembersBySpaceId = async (spaceId) => {
		const { data, error } = await supabase
			.from('space_members')
			.select('*')
			.eq('space_id', spaceId)

		if (error) {
			//console.error(error)
			return
		}

		let spaceMembers = []
		if (data) {
			spaceMembers = data.map((member) => ({
				id: member.id,
				email: member.member_email
			}))
		}

		setMembers(spaceMembers)
	}

	return (
		<Layout id={pathArr[1]}>
			<h1>Space:{pathArr[1]}</h1>
			<br></br>
			<h2>Invite others to your space!</h2>
			<br></br>
			<AddMember onAddMember={addNewMemberHandler} />
			
			{/* <Auth
				supabaseClient={supabase}
				providers={['magic_link']}
				view="magic_link"
				authLayout="centered"
				></Auth> */}
			<h2>Current members in space:</h2>
			<ListOfMembers members={members} />
		</Layout>
	)
}

//1)fix sign out button
//replace user-profile to the id and save it
//save the id so when the user logs out and logs back in they are in that space
//if they are in that space when they send the magic link it prompts the user to log into that space as well
