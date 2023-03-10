import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'

export default function LeaderboardPage() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1)
	const pathArr = router.asPath.split('/')
	console.log(path, pathArr, user)
	return (
		<Layout id={pathArr[1]}>
	 <div>Loading...LeaderboardPage</div>
	 </Layout>
	)
}
