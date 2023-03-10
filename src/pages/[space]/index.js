import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
function Space() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1)
	console.log(path, user)
	//should be getServersideprops, otherwise it will render same for all spaces
	return (
		<div>
			{/* <h1>{space.name}</h1> */}
			Space
		</div>
	)
}

export default Space
