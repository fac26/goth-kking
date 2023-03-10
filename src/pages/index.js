import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@components/Account'

import Login from '../components/spaces/CreateSpace'
import CreateSpace from '../components/spaces/CreateSpace'
import { userAgent } from 'next/server'
import SpaceList from 'components/spaces/SpaceList'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function LandingPage() {
	const session = useSession()
	const supabase = useSupabaseClient()
	const router = useRouter()

	useEffect(() => {
		if (session) {
			console.log(router.query, ' query')
			router.push('/user-profile')
		}
	}, [session])

	return (
		//layout insert
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
