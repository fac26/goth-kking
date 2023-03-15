import { useSession } from '@supabase/auth-helpers-react'
import Layout from 'components/Layout'
import Account from 'components/Account'

function UserProfile() {
	const session = useSession()

	return (
		<Layout>
			<Account session={session} />
		</Layout>
	)
}

export default UserProfile
