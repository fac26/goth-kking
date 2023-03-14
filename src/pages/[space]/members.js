import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import Layout from 'components/Layout'
import AddMember from 'components/members/AddMember'
import { useRouter } from 'next/router'
import ListOfMembers from 'components/members/ListOfMembers'
import { Auth } from '@supabase/auth-ui-react'
import { useState } from 'react'

const members = [{ name: 'Mr Smith', email: 'example@test.uk', id: '1' }]
export default function Members() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1) //this doesn't give anything
	const pathArr = router.asPath.split('/')
	console.log(pathArr) // ['', 130, members]
	console.log(path) // 130/members
	//if undefined it gives: "", undefined, members
	//if 130 it gives: '', 130, members

	// state to hold email input value
	// const [email, setEmail] = useState('');
	// const session = useSession()

	// define function to handle magic link sending

	const addNewMember = async () => {
		const userCreatedResponse = await supabase.from('space_members').insert({
			member_email: user.email,
			space_id: spacesResponse.data[0].id,
			member_nickname: '',
			is_admin: true,
			user_id: user.id // set the user_id column to the ID of the authenticated user
		})

		if (userCreatedResponse.error) {
			console.error(error)
		} else {
			console.log('New member added successfully!')
		}
	}

	return (
		<Layout id={pathArr[1]}>
			<h1>Space:{pathArr[1]}</h1>
			<br></br>
			<h2>Invite others to your space!</h2>
			<br></br>
			{/* <AddMember /> */}
			<Auth
				supabaseClient={supabase}
				providers={['magic_link']}
				view="magic_link"
				authLayout="centered"></Auth>
			<h2>Current members in space:</h2>
			<ListOfMembers members={members} />
		</Layout>
	)
}

//1)fix sign out button
//replace user-profile to the id and save it
//save the id so when the user logs out and logs back in they are in that space
//if they are in that space when they send the magic link it prompts the user to log into that space as well
