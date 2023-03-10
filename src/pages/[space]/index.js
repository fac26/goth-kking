import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'

function Space() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1)
	console.log(path, user)
	//should be getServersideprops, otherwise it will render same for all spaces
	return (
		<Layout id={path}>
		<div>
			<h1>Space id {path}</h1>
		</div>
		</Layout>
	)
}

export default Space

//http://localhost:3000/133