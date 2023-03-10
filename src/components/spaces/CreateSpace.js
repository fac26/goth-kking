import { useRef } from 'react'
function CreateSpace({ addSpace }) {
	const spaceNameRef = useRef()
	const submitSpaceHandler = async (event) => {
		event.preventDefault()
		const nameOfSpace = spaceNameRef.current.value

		//hadle input!!!
		if (nameOfSpace.trim().length == 0) {
			//checking the user input is not empty
			return
		}
		addSpace(nameOfSpace.trim())
		spaceNameRef.current.value = ''
	}

	return (
		<form onSubmit={submitSpaceHandler}>
			<div>
				<label htmlFor="spaceName">Name space</label>
				<input
					name="spaceName"
					type="text"
					id="spaceName"
					ref={spaceNameRef}
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
