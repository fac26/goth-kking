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
					<div className="">
						<h2>What is Guardian of the House?</h2>
						<p>
							Guardian of the House is a web application that allows you to
							create a space for members to organize and collaborate around
							tasks and chores.
						</p>
					</div>
					<div className="">
						<p>
							Once you have created a space, you can invite members members to
							join the space. You can create tasks and assign them to members.
							By default, the tasks will rotate between members on a weekly
							basis.
						</p>
					</div>
					<div className="">
						<Image
							src=""
							alt="Guardian of the House"
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Home
