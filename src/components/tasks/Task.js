import { useState } from 'react'

function Task({
	id,
	taskName,
	taskDescription,
	taskPoints,
	members,
	onDeleteTask
}) {
	const [toggleList, setToggleList] = useState(false)

	const deleteTaskHandler = () => {
		onDeleteTask(id)
	}

	const toggleMemberList = () => {
		setToggleList(!toggleList)
	}

	return (
		<li className='border'id={id}>
			<div>
				<h3>{taskName}</h3>
				<p>{taskDescription}</p>
			</div>
			<div>
				<p>{taskPoints}</p>
			</div>
			<button onClick={deleteTaskHandler}>Delete</button>
			<button onClick={toggleMemberList}>Assign</button>
			<div>
				{toggleList && (
					<ul>
						{members.map((member) => {
							return (
								<li
									key={member.id}
									id={member.id}>
									<p>{member.member_email}</p>
								</li>
							)
						})}
					</ul>
				)}
			</div>
		</li>
	)
}

export default Task
