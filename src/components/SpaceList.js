import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

function SpaceList({ session }) {
	const supabase = useSupabaseClient()
	const user = useUser()

	const [loading, setLoading] = useState(true)
	const [spaces, setSpaces] = useState(null)

	//async function getSpaceList() {

	// let spaceResponse = await supabase
	// 	.from('space_members')
	// 	.select('*')
	// 	.eq('member_email', user.email)
	// console.log(spaceResponse, ' from home')
	// }

	return <div className="form-widget">space list</div>
}

export default SpaceList
