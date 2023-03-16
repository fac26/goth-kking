import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Layout from 'components/Layout'

function Home() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const session = useSession()
	const path = router.asPath.slice(1) //  146
	console.log(path, user)

	//should be getServersideprops, otherwise it will render same for all spaces
	return (
		<Layout>
			<div className="container">
				<div>
					<div class='font-mono'>
						<br></br>
						<br></br>
						<h1 class='text-2xl'>What is Guardian of the House?</h1>
						<br></br>
						<p class='text-xl'>
							Guardian of the House is a web application that allows you to
							create a space for members to organize and collaborate around
							tasks and chores.
						</p>
						<br></br>
						<p class='text-xl'>
							Once you have created a space, you can invite members members to
							join the space. You can create tasks and assign them to members.
							By default, the tasks will rotate between members on a weekly
							basis.
						</p>
						<br></br>
						<div ><iframe  height="370" src="https://giphy.com/embed/HppueDDtfDnSkL1vgG/video" width="480"></iframe></div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Home
