import Link from 'next/link'
import { useSession } from '@supabase/auth-helpers-react'
import SignUpForm from '@components/Auth/SignUpForm'

function SignUp() {
	const session = useSession()

	return (
		<div>
			<h1>Sign Up</h1>
			{!session ? (
				<div>
					<p>
						<SignUpForm />
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
