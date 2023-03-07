import { useRouter } from 'next/navigation' //added to redirect

function LandingPage() {
	const router = useRouter() //call router

	return (
		<div className="container">
			<div>Info about GOTH</div>
			<button
				onClick={() => {
					router.push('/login')
				}}>
				Login
			</button>
		</div>
	)
}

export default LandingPage
