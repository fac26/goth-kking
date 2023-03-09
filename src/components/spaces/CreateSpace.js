function CreateSpace({ addSpace }) {
	const submitSpaceHandler = async (event) => {
		event.preventDefault()
		const nameOfSpace = event.target[0].value

		//hadle input!!!
		if (nameOfSpace.length == 0) {
			//checking the user input is not empty
			return
		}
		addSpace(nameOfSpace)
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
