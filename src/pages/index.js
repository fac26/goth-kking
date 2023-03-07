import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@components/Account'
import Login from '../components/CreateSpace'
import CreateSpace from '../components/CreateSpace'
import { userAgent } from 'next/server'

function LandingPage() {
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
				<CreateSpace session={session} />
			)}
		</div>
	)
}

export default LandingPage
