import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'

function Task({ taskName, taskDescription, taskPoints, members }) {
	const [toggleList, setToggleList] = useState(false)
	const supabase = useSupabaseClient()
	const addCommentHandler = () => {
		console.log('comment added ')
	}

	const toggleMemberList = () => {
		setToggleList(!toggleList)
	}

	// const handleDeleteTask = async (id) => {
	// 	// Delete the task from Supabase
	// 	const { error } = await supabase.from('tasks').delete().eq('id', id)
	// 	if (error) {
	// 	  console.log('Error deleting task:', error)
	// 	  return
	// 	}
	  
	// 	// Remove the task from the page
	// 	const taskIndex = tasks.findIndex((task) => task.id === id)
	// 	const updatedTasks = [...tasks.slice(0, taskIndex), ...tasks.slice(taskIndex + 1)]
	// 	setTasks(updatedTasks)
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
			{/* <button onClick={() => handleDeleteTask(id)}>Delete</button> */}
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
