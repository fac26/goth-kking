//Version 2.0
import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

function SpaceList({ session }) {
	const supabase = useSupabaseClient()
	const user = useUser()
	const [spaces, setSpaces] = useState([])

	useEffect(() => {
		getSpaceList()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session])

	async function getSpaceList() {
		//we pass second second arg to rpc {email:user.email}, this is how we can add args to function we defined as get_spaces(email)
		const currentUserMemberOfList = await supabase.rpc('get_spaces', {
			email: user.email
		})

		const spaceNames = currentUserMemberOfList.data.map(
			(spaceObj) => spaceObj.name
		)

		setSpaces(spaceNames)
	}

	// const linkingspaces = await supabase //should we query for each space_id with different query as we get an array?

	// .from("spaces")
	// .select(name, space_id)

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
