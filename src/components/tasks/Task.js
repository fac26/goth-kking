import { useState } from 'react'

function Task({
	id,
	taskName,
	taskDescription,
	taskPoints,
	members,
	onDeleteTask
}) {
	const [randomMember, setRandomMember] = useState({})

	const deleteTaskHandler = () => {
		onDeleteTask(id)
	}

	const assignRandomMember = () => {
		const randomIndex = Math.floor(Math.random() * members.length)
		console.log(members[randomIndex])
		setRandomMember(members[randomIndex])
	}

	return (
		<li
			className="border"
			id={id}>
			<div>
				<h3>{taskName}</h3>
				<p>{taskDescription}</p>
			</div>
			<div>
				<p>{taskPoints}</p>
			</div>
			<button onClick={deleteTaskHandler}>Delete</button>
			<button onClick={assignRandomMember}>Assign</button>
			<div id={randomMember.id}>{randomMember.member_email.split('@')[0]}</div>
		</li>
	)
}

export default Task
