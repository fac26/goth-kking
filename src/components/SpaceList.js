import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

function SpaceList({ session }) {
	const supabase = useSupabaseClient()
	const user = useUser()

	const [loading, setLoading] = useState(true)
	const [spaces, setSpaces] = useState([])

	//1. need to check if the user's name === member_email
	//2. then we can use the member_email to check what spaces they created using the space_id in the space_members table
	//3. then we use the space_id and connect to spaces(id) to retrieve the name in the spaces table

	useEffect(() => {
		getSpaceList()
	}, [session])

	async function getSpaceList() {
		//we pass second second arg to rpc {email:user.email}, this is how we can add args to function we defined as get_spaces(email)
		const currentUserMemberOfList = await supabase.rpc('get_spaces', {
			email: user.email
		})

		console.log(currentUserMemberOfList.data, user.email)

		const spaceNames = currentUserMemberOfList.data.map(
			(spaceObj) => spaceObj.name
		)
		console.log(spaceNames)

		setSpaces(spaceNames)
	}

	// const linkingspaces = await supabase //should we query for each space_id with different query as we get an array?

	// .from("spaces")
	// .select(`name, space_id`)

	return (
		<div className="form-widget">
			<ul>
				{spaces.map((spaceitem, index) => (
					<li key={index}>{spaceitem}</li>
				))}
			</ul>
		</div>
	)
}

export default SpaceList
