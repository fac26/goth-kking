//localhost:3000/home

import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

async function Home() {
	const supabase = useSupabaseClient()
	const user = useUser()
	const createHouse = () => {}
	let spaceResponse = await supabase
		.from('space_members')
		.select('*')
		.eq('member_email', user.email)
	console.log(spaceResponse, ' from home')
	return <div>Home page</div>
}

export default Home
