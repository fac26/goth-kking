import React, { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { createClient } from '@supabase/supabase-js'
// import useSupabaseAuth form ''

const AddMember = () => {
	// const { user } = useSupabaseAuth()
	const [formData, setFormData] = useState({ name: '', email: '' })
	const [errors, setErrors] = useState({})
	const supabase = useSupabaseClient()
	const handleInputChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
	}

	const handleFormSubmit = async (event) => {
		event.preventDefault()
		setErrors({})
		// console.log(formData)

		try {
			const { email } = formData
			const { error } = await supabase.auth.signIn({ email }, { redirectTo: window.location.href })

			if (error) {
				throw error
			}
			console.log(`Invitation sent to ${email}`)

		} catch (error) {
			setErrors( {email: error.message } )
		 }
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<h1>Invite others to your space:</h1>
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