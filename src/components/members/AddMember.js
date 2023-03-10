import React, { useState } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const AddMember = () => {
	const [formData, setFormData] = useState({ name: '', email: '' })
	const [errors, setErrors] = useState({})
	const supabase = useSupabaseClient()
	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
	}

	const handleFormSubmit = (event) => {
		event.preventDefault()
		setErrors({})
		console.log(formData)

		try {
			// Submit form data to Supabase here
		} catch (error) {
			setErrors(error.response.data.errors)
		}
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<h1>Invite others to your space:</h1>
				<Auth
					supabaseClient={supabase}
					magicLink
				/>
				{/* invite link goes here */}
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
				/>
				{errors.email && <p>{errors.email}</p>}
			</div>
			<button type="submit">Invite</button>
		</form>
	)
}

export default AddMember

//want to invite member by magic link
