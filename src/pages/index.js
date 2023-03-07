import Image from 'next/image'
import Link from 'next/link'

function LandingPage() {
	return (
		<div className="container">
			<div>
				<div className="">
					<h1>Welcome to Guardian of the House!</h1>
				</div>
				<div className="">
					<h2>What is Guardian of the House?</h2>
					<p>
						Guardian of the House is a web application that allows you to create
						a space for members to organize and collaborate around tasks and
						chores.
					</p>
				</div>
				<div className="">
					<h2>How do I get started?</h2>
					<p>
						To get started, you can either login or create an account. Once you
						have an account, you can create a space for members to use.
					</p>

					<p>
						Once you have created a space, you can invite members members to
						join the space. You can create tasks and assign them to members. By
						default, the tasks will rotate between members on a weekly basis.
					</p>
				</div>
				<div className="">
					<Image
						src=""
						alt="Guardian of the House"
					/>
				</div>
				<div>
					<p>Click here to</p>
					<button>
						{/* <Link href="./login">login with an existing account</Link> */}
					</button>
					<p>or</p>
					<button>
						{/* <Link href="./sign-up">create an account</Link> */}
					</button>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
