import Link from 'next/link'

function Login() {
	return (
		<div>
			<h1>Login</h1>
			<p>Sign in form goes here!</p>
			<p>If user wants to log in with magic link, show OTP type form</p>
			<Link href="/home">Go to home page</Link>
		</div>
	)
}

export default Login
