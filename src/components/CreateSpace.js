import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation' //added to redirect
function CreateSpace({ session }) {
	const supabase = useSupabaseClient()
	const user = useUser()
	const router = useRouter() //call router

	console.log(user)
	const submitSpaceHandler = async (event) => {
		event.preventDefault()
		const nameOfSpace = event.target[0].value
		console.dir(nameOfSpace)
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
			console.log(spacesResponse.error)
			return
		}
		console.log(spacesResponse.data[0].id, spacesResponse.error)
		console.log(spacesResponse, ' spaceResponse')

		const userCreatedResponse = await supabase //{data, error} =>userCreatedResponse.data
			.from('space_members')
			.insert([
				{
					member_email: user.email,
					space_id: spacesResponse.data[0].id,
					isAdmin: true
				}
			])
			.select()
		if (userCreatedResponse.error) {
			console.log(userCreatedResponse.error)
			return
		}

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
			</div>
			<button>Add</button>
		</form>
	)
}

export default CreateSpace
