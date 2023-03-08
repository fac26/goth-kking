import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

function SignInForm({ invite, type }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const supabase = useSupabaseClient()
	const router = useRouter()

	async function handleSubmit(event) {
		event.preventDefault()

		if (type === 'OTP') {
			await supabase.auth.signInWithOtp({
				email: email,
				options: {
					emailRedirectTo: 'http://localhost:3000/home' // || VERCEL url
				}
			})
		}

		if (type === 'Credentials') {
			await supabase.auth.signInWithPassword({
				email: email,
				password: password
			})
		}

		router.push('/home')

		// TODO: Add user feedback to let the user know what's happening
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				{type === 'Credentials' && (
					<div>
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>
				)}
				<button type="submit">
					{type === 'OTP' && invite === true ? 'Invite User' : 'Sign in'}
				</button>
			</form>
		</div>
	)
}

export default SignInForm
