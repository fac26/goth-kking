import React, { useState } from 'react'

const AddMember = () => {
	const [formData, setFormData] = useState({ name: '', email: '' })
	const [errors, setErrors] = useState({})

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
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
				/>
				{errors.name && <p>{errors.name}</p>}
			</div>
			<div>
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
			<button type="submit">Submit</button>
		</form>
	)
}

export default AddMember
