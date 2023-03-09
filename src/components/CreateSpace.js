import { useState } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router' //added to redirect //next/router wich gives us route.query!
function CreateSpace({ session }) {
	const supabase = useSupabaseClient()
	const user = useUser()
	const router = useRouter() //call router
	//console.log(router.push('/'))
	const [newSpace, setNewSpace] = useState('')

	const submitSpaceHandler = async (event) => {
		event.preventDefault()
		const nameOfSpace = event.target[0].value

		//hadle input!!!
		if (nameOfSpace.length == 0) {
			//checking the user input is not empty
			return
		}
		const spacesResponse = await supabase
			.from('spaces')
			.insert([{ name: nameOfSpace }])
			.select()

		if (spacesResponse.error) {
			//console.log(spacesResponse.error)
			return
		}

		const userCreatedResponse = await supabase //{data, error} =>userCreatedResponse.data
			.from('space_members')
			.insert([
				{
					member_email: user.email,
					space_id: spacesResponse.data[0].id,
					is_admin: true
				}
			])
			.select()
		if (userCreatedResponse.error) {
			//console.log(userCreatedResponse.error)
			return
		}
		setNewSpace(nameOfSpace)
		//router.push('/tasks')
	}

	return (
		<form onSubmit={submitSpaceHandler}>
			<div>
				<label htmlFor="spaceName">Name space</label>
				<input
					name="spaceName"
					type="text"
					id="spaceName"
				/>
				<style jsx>{`
					#spaceName {
						border: 1px solid black;
					}
				`}</style>
			</div>
			<button>Add</button>
		</form>
	)
}

export default CreateSpace
