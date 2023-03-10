import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import Layout from 'components/Layout'
import AddMember from 'components/members/AddMember'
import { useRouter } from 'next/router'
import ListOfMembers from 'components/members/ListOfMembers'

const members = [{name:'Mr Smith', email:'example@test.uk', id: '1'}]
export default function Members() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1)
	const pathArr = router.asPath.split('/')
	console.log(path, pathArr, user)

	return (
		<Layout id={pathArr[1]}>
		<div>
			<h1>Space:{pathArr[1]}</h1>
			
			<AddMember />
			<ListOfMembers members={members}/>
		</div>
		</Layout>
	)
}
