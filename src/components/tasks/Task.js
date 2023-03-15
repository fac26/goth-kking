import { useState } from 'react'

function Task({
	id,
	taskName,
	taskDescription,
	taskPoints,
	members,
	onAssign
}) {
	const [toggleList, setToggleList] = useState(false)
	const [assignMembers, setAssignMembers] = useState({})

	const addCommentHandler = () => {
		console.log('comment added ')
	}

	const toggleMemberList = () => {
		setToggleList(!toggleList)
	}
	const changeAssigneeHandler = (event, memberId) => {
		const newValue = event.target.value
		setAssignMembers((prevValues) => ({
			...prevValues,
			[memberId]: newValue
		}))
	}
	const saveAssignMembersHandler = () => {
		setToggleList()
		onAssign({ assignMembers: assignMembers, taskId: id })
	}

	return (
		<li>
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
					<>
						<ul>
							{members.map((member, index) => {
								return (
									<li
										key={member.id}
										id={member.id}>
										<p>{member.member_email.split('@')[0]}</p>
										<input
											type="number"
											min="1"
											max={members.length}
											onChange={(event) => {
												changeAssigneeHandler(event, member.id)
											}}
										/>
									</li>
								)
							})}
						</ul>
						<button onClick={saveAssignMembersHandler}> Save </button>
					</>
				)}
			</div>
		</li>
	)
}

export default Task
