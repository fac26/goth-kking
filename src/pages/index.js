import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@components/Account'
import Login from '../components/CreateSpace'
import CreateSpace from '../components/CreateSpace'
import { userAgent } from 'next/server'
import SpaceList from 'components/SpaceList'

function LandingPage() {
	const session = useSession()
	const supabase = useSupabaseClient()

	return (
		<div className="container">
			{!session ? (
				<>
					<Auth
						supabaseClient={supabase}
						magicLink
						providers
					/>
					<div>Info about GOTH</div>
				</>
			) : (
				<>
					<CreateSpace session={session} />
					<SpaceList session={session} />
					<button
						className="button block"
						onClick={() => supabase.auth.signOut()}>
						Sign Out
					</button>
					{/**add list of this user spaces */}
				</>
			)}
		</div>
	)
}

export default LandingPage
