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
			//console.log(router.query, ' query')
			router.push('/user-profile')
		}
	}, [session])

	return (
		//layout insert
		<div className="container">
			<div className="">
				<h1>Welcome to Guardian of the House!</h1>
			</div>

			<h2>How do I get started?</h2>
			<p>
				To get started, you can either login or create an account. Once you have
				an account, you can create a space for members to use.
			</p>

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
				<>{/**add list of this user spaces */}</>
			)}
		</div>
	)
}

export default LandingPage
