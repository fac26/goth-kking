import Task from './Task'
// import classes from '@styles/Task.module.css';//styling

function ListOfTasks(props) {
	return (
		<ul>
			{props.tasks.map((individualtask) => {
				return (
					<Task
						key={individualtask.id}
						id={individualtask.id}
						taskName={individualtask.taskName}
						assignedMember={individualtask.assignedMember}
						taskPoints={individualtask.taskPoints}
					/>
				)
			})}
		</ul>
	)
}

export default ListOfTasks
