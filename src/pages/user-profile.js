import { useSession } from '@supabase/auth-helpers-react'
import Layout from 'components/Layout'
import Account from 'components/Account'

function UserProfile() {
	const session = useSession()

	return (
		<Layout>
			<br></br>
			<br></br>
			<Account session={session} />
		</Layout>
	)
}

export default UserProfile
