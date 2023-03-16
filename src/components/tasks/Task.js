import { useState } from 'react'

function Task({ taskName, taskDescription, taskPoints, members }) {
	const [toggleList, setToggleList] = useState(false)

	const addCommentHandler = () => {
		console.log('comment added ')
	}

	const toggleMemberList = () => {
		setToggleList(!toggleList)
	}

	return (
		<li className='border'>
			<div>
				<h3>{taskName}</h3>
				<p>{taskDescription}</p>
			</div>
			<div>
				<p>{taskPoints}</p>
			</div>
			<button onClick={addCommentHandler}>Add comment</button>
			<button onClick={toggleMemberList}>Assign</button>
			<div>
				{toggleList && (
					<ul>
						{members.map((member) => {
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
