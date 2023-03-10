import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import AddMember from 'components/members/AddMember'
import { useRouter } from 'next/router'

export default function Members() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1)
	const pathArr = router.asPath.split('/')
	console.log(path, pathArr, user)

	return (
		<div>
			<h1>Loading...Members</h1>
			<AddMember />
		</div>
	)
}
