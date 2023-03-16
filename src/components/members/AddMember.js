import React, { useState, useRef } from 'react'

const isEmpty = (value) => value.trim() === ''

const AddMember = (props) => {
	// const { user } = useSupabaseAuth()
	const emailRef = useRef()

	const [formInputValidity, setformInputValidity] = useState({
		memberemail: true
	})

	const handleFormSubmit = async (event) => {
		event.preventDefault()
		const enteredEmail = emailRef.current.value

		const enteredEmailIsValid = !isEmpty(enteredEmail)

		setformInputValidity({
			memberemail: enteredEmailIsValid
		})

		const formIsValid = enteredEmailIsValid
		if (!formIsValid) {
			return
		}
		props.onAddMember({
			memberEmail: enteredEmail
		})
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				{/* invite link goes here */}
				<label htmlFor="email">Email:</label>
				<input className='border-black'
					type="email"
					id="email"
					name="email"
					ref={emailRef}
				/>
			</div>
			<style jsx>{`
					#email {
						border: 1px solid black;
						border-radius: 0.5rem
					}
				`}</style>
			<button type="submit" className='bg-black text-white rounded-md'>Invite</button>
		</form>
	)
}

export default AddMember

//want to invite member by magic link
