import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

function SignUpForm() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const supabase = useSupabaseClient()
	const router = useRouter()

	async function handleSubmit(event) {
		event.preventDefault()

		await supabase.auth.signUp({
			email: email,
			password: password
		})

		router.push('/home')

		// TODO: Add user feedback to let the user know what's happening
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Email:
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Password:
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</label>
				</div>
				<button type="submit">Sign up</button>
			</form>
		</div>
	)
}

export default SignUpForm
