import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@components/Account'

function Home() {
	const session = useSession()
	const supabase = useSupabaseClient()

	return (
		<div className="container">
			{!session ? (
				<Auth
					supabaseClient={supabase}
					magicLink
					providers
				/>
			) : (
				<Account session={session} />
			)}
		</div>
	)
}

export default Home
