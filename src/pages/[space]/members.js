import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import Layout from 'components/Layout'
import AddMember from 'components/members/AddMember'
import { useRouter } from 'next/router'
import ListOfMembers from 'components/members/ListOfMembers'
import { Auth} from '@supabase/auth-ui-react'
import { useState } from 'react'

const members = [{name:'Mr Smith', email:'example@test.uk', id: '1'}]
export default function Members() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1)
	const pathArr = router.asPath.split('/')
	console.log(path, pathArr, user)

	  
	// state to hold email input value
	const [email, setEmail] = useState('');
	const session = useSession()
  
	// define function to handle magic link sending
	const handleMagicLink = async ({ email }) => {
	  try {
		const { error } = await supabase.auth.signIn({ email });
		if (error) throw error;
		alert('Check your email for the magic link!')
	  } catch (error) {
		alert(error.message)
	  }
	}

	return (
		<Layout id={pathArr[1]}>
			<form onSubmit={(event) => {
        event.preventDefault();
        handleMagicLink({ email });
      }}></form>
			<h1>Space:{pathArr[1]}</h1>
			<br></br>
			<Auth
          supabaseClient={supabase}
          view="magic_link"
          authLayout="centered"
          magicLink={{
            getURL: async (email) => {
              const { error } = await supabase.auth.signIn({ email });
              if (error) throw error;
            }
          }}
        >
        </Auth>
			{/* <AddMember /> */}
			{/* <ListOfMembers members={members}/> */}
		</Layout>
	)
}

//1)fix sign out button
//replace user-profile to the id and save it
//save the id so when the user logs out and logs back in they are in that space
//if they are in that space when they send the magic link it prompts the user to log into that space as well