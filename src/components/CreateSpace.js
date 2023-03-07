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
		const { data, error } = await supabase
			.from('spaces')
			.insert([{ name: 'The Space' }])
			.select()

		if (error) {
			console.log(error)
			return
		}
		console.log(data[0].id, error)
		const userCreatedRespose = await supabase
			.from('space_members')
			.insert([
				{ member_email: user.email, space_id: data[0].id, isAdmin: true }
			])
			.select()
		if (userCreatedRespose.error) {
			console.log(userCreatedRespose.error)
			return
		}
		console.log(data[0].id, error, userCreatedRespose.data)
		router.push('/tasks')
	}

	return (
		<form onSubmit={submitSpaceHandler}>
			<div>
				<label>Name space</label>
				<input />
			</div>
			<button>Add</button>
		</form>
	)
}

export default CreateSpace
