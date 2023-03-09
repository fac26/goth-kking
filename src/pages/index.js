import { Auth } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@components/Account'

import Login from '../components/spaces/CreateSpace'
import CreateSpace from '../components/spaces/CreateSpace'
import { userAgent } from 'next/server'
import Avatar from 'components/Avatar'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function LandingPage() {
	const session = useSession()
	const supabase = useSupabaseClient()
	const router = useRouter()
	useEffect(() => {
		if (session) {
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
					{/**add list of this user spaces */}
				</>
			)}
		</div>
	)
}

export default LandingPage
