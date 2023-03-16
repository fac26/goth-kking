import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'

function Task({ taskName, taskDescription, taskPoints, members }) {
	const [toggleList, setToggleList] = useState(false)
	const [tasksList, setTaskList] = useState([])
	const supabase = useSupabaseClient()
	const addCommentHandler = () => {
		console.log('comment added ')
	}

	const toggleMemberList = () => {
		setToggleList(!toggleList)
	}

	// const deleteByValue = value => {
	// 	setTaskList(oldValues => {
	// 	  return oldValues.filter(taskItem => taskItem !== value)
	// 	})
	//   }

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
			{/* <button onClick={() => deleteByValue(task)}>Delete</button> */}
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
