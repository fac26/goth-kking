export async function getStaticPaths() {
	const response = await axios.get(
		`https://szhhvqdongnuengdfynk.supabase.co/rest/v1/Kr33L/goth-kking/tables/spaces/rows/${params.space}`
	)

	const paths = response.data.rows.map((space) => ({
		params: { id: space.id.toString() }
	}))

	return {
		paths,
		fallback: false
	}
}
//getStaticProps

function MembersGetStatic({ space_id }) {
	const user = useSession()
	console.log(user)
	const supabase = useSupabaseClient()

	return (
		<div>
			<h1>{space_id}</h1>
			{user ? (
				<div>Yeah</div>
			) : (
				// <form>
				// 	<input />

				// 	<button
				// 		onClick={async () => {
				// 			const result = await supabase.rpc('add_member', {
				// 				email: user.email,
				// 				space_id: space.id,
				// 				nick_name: ''
				// 			})

				// 		}}>
				// 		Add to space
				// 	</button>
				// </form>
				// list of members
				// allow to add and delete member
				<div>No no</div>
			)}
		</div>
	)
}

export default MembersGetStatic

//"axios": "^1.3.4",
//"dotenv": "^16.0.3",
