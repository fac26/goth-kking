function Task(props) {
	const addCommentHandler = () => {
		console.log('comment added )))) ')
	}

	return (
		<li>
			<input type="checkbox" />
			<div>
				<h3>{props.taskName}</h3>
				<p>{props.taskDescription}</p>
			</div>
			<div>
				<p>{props.taskPoints}</p>
			</div>
			<button onClick={addCommentHandler}>Add comment</button>
		</li>
	)
}

export default Task
