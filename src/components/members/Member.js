function Member(props) {
	const deleteMemberHandler = () => {
		console.log('comment added )))) ')
	}

	return (
		<li>
			<div>
				<h3>{props.name}</h3>
				<p>{props.email}</p>
			</div>
			<div>
				<p>{props.taskPoints}</p>
			</div>
			<button onClick={deleteMemberHandler}>Delete</button>
		</li>
	)
}

export default Member