import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import Account from 'components/Account'
function Space() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const session = useSession()
	const path = router.asPath.slice(1) //  146
	console.log(path, user)

	//should be getServersideprops, otherwise it will render same for all spaces
	return (
		<Layout>
			<Account session={session} />
		</Layout>
	)
}

export default Space
