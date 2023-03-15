import { useState } from 'react'

function Task(props) {
	const [toggleList, setToggleList] = useState(false)

	const addCommentHandler = () => {
		console.log('comment added ')
	}

	const toggleMemberList = () => {
		setToggleList(!toggleList)
	}

	return (
		<li>
			<div>
				<h3>{props.taskName}</h3>
				<p>{props.taskDescription}</p>
			</div>
			<div>
				<p>{props.taskPoints}</p>
			</div>
			<button onClick={addCommentHandler}>Add comment</button>
			<button onClick={toggleMemberList}>Assign</button>
			<div>
				{toggleList && (
					<ul>
						{props.members.map((member) => {
							return (
								<li
									key={member.id}
									id={member.id}>
									{member.member_email}
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
