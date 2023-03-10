import axios from 'axios' //installed!!!
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'

export async function getServerSideProps({ params, query }) {
	console.log(query)
	// const result = dotenv.config() //?
	// console.log(result.parsed, ' result')
	// console.log(params.space, ' 34')
	// const response = await axios.get(
	// 	`https://szhhvqdongnuengdfynk.supabase.co/rest/v1/Kr33L/goth-kking/tables/spaces/rows/${params.space}`
	// )
	// console.log(response)

	//	`https://api.supabase.io/rest/v1/Kr33L/goth-kking/tables/spaces/rows/${params.space}`

	//return { props: { space: response.data.rows[0] } }
	return { props: { space_id: params.space } }
}

function Space({ space_id }) {
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

export default Space

// export async function getServerSideProps({ params }) {
//     const { id } = params
//     const response = await axios.get(`...`)

//     return {
//       props: {
//         spaces: response.data.rows,
//       },
//     }
//   }
//

// {
//     "rows": [
//       {
//         "id": 1,
//         "name": "Space 1",
//
//       },
//       {
//         "id": 2,
//         "name": "Space 2",
//
//       },
//       ...
//     ]
//   }
