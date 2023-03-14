import Task from './Task'
// import classes from '@styles/Task.module.css';//styling

function ListOfTasks(props) {
	return (
		<>
			{props.tasks ? (
				<ul>
					{props.tasks.map((individualtask) => {
						return (
							<Task
								key={individualtask.id}
								id={individualtask.id}
								taskName={individualtask.name}
								taskDescription={individualtask.description}
								taskPoints={individualtask.points}
							/>
						)
					})}
				</ul>
			) : (
				<p>Please choose the space</p>
			)}
		</>
	)
}

export default ListOfTasks
