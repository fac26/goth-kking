function SpaceList({ spaces }) {
	// const supabase = useSupabaseClient()

	// const [spaces, setSpaces] = useState([])

	// useEffect(() => {
	// 	getSpaceList()
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [session])
	// console.log(user)

	// async function getSpaceList() {
	// 	//we pass second second arg to rpc {email:user.email}, this is how we can add args to function we defined as get_spaces(email)
	// 	const currentUserMemberOfList = await supabase.rpc('get_spaces', {
	// 		email: user.email
	// 	})

	// 	const spaceNames = currentUserMemberOfList.data.map((spaceObj) => ({
	// 		name: spaceObj.name,
	// 		id: spaceObj.id
	// 	}))

	// 	setSpaces(spaceNames)
	// }

	return (
		<div className="form-widget">
			{spaces ? (
				<ul>
					{spaces.map((spaceitem) => (
						<li
							key={spaceitem.id}
							id={spaceitem.id}>
							{spaceitem.name}
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default SpaceList
