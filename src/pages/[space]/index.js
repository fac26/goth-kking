import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
function Space({ space }) {
	const user = useUser()
	const supabase = useSupabaseClient()
	//should be getServersideprops, otherwise it will render same for all spaces
	return (
		<div>
			{/* <h1>{space.name}</h1> */}
			Space
		</div>
	)
}

export default Space
