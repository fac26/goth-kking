import { useState } from 'react'
import Link from 'next/link'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import SignUpForm from '@components/Auth/SignUpForm'

function SignUp() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const supabase = useSupabaseClient()
	const session = useSession()

	return (
		<div>
			<h1>Sign Up</h1>
			{!session ? (
				<div>
					<SignUpForm handleSubmit={handleSignUp} />
					<p>
						Already have an account?
						<Link href="/login">Sign In</Link>
					</p>
				</div>
			) : (
				<div>
					<p>You are already signed in</p>
					<Link href="/home">Click here to go to your dashboard</Link>
				</div>
			)}
		</div>
	)
}

export default SignUp
