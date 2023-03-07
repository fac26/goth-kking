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
		let spaceResponse = await supabase
			.from('space_members')
			.select('space_id') //?
			.eq('member_email', user.email)
		console.log(spaceResponse.data, ' from home') //array of objects
		//0: {space_id: 36} 1	: {space_id: 37} 2: {space_id: 38}

		console.log(spaceResponse.data)
		const spaceNameList = []
		for (let spaceObj of spaceResponse.data) {
			let whatspaces = await supabase
				.from('spaces')
				.select('name')
				.eq('id', spaceObj.space_id)
			spaceNameList.push(whatspaces.data[0].name)
			console.log(spaceObj.space_id)
			console.log(whatspaces.data[0].name)
		}
		console.log(spaceNameList) //['yep', 'cheese']
		setSpaces(spaceNameList)
		console.log(spaces)
	}
	console.log(spaces)
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
