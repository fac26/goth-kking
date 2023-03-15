import { useRef, useState } from 'react'

const isEmpty = (value) => value.trim() === ''

function AddTaskForm(props) {
	const taskNameRef = useRef()
	const taskDescriptionRef = useRef()
	const taskPointsRef = useRef()

	//const [frequency, setFrequency] = useState('weekly')
	const [formInputValidity, setformInputValidity] = useState({
		taskname: true,
		taskDescription: true,
		taskPoints: true
		//taskAssignee: true
	})

	//to add more classes here
	const taskNameControlClasses = `${
		formInputValidity.taskname ? '' : 'invalid'
	}`
	const taskDescriptionControlClasses = `${
		formInputValidity.taskDescription ? '' : 'invalid'
	}`
	const taskPointsControlClasses = `${
		formInputValidity.taskPoints ? '' : 'invalid'
	}`

	const submitTaskHandler = (event) => {
		event.preventDefault()

		const enteredTaskName = taskNameRef.current.value
		const enteredTaskDescription = taskDescriptionRef.current.value
		const enteredTaskPoints = taskPointsRef.current.value

		const enteredTaskNameIsValid = !isEmpty(enteredTaskName)
		const enteredTaskDescriptionIsValid = !isEmpty(
			taskDescriptionRef.current.value
		)
		const enteredTaskPointsIsValid = Number(enteredTaskPoints) > 0

		setformInputValidity({
			taskname: enteredTaskNameIsValid,
			taskDescription: enteredTaskDescriptionIsValid,
			taskPoints: enteredTaskPointsIsValid
		})

		const formIsValid =
			enteredTaskNameIsValid &&
			enteredTaskDescriptionIsValid &&
			enteredTaskPointsIsValid

		if (!formIsValid) {
			return
		}

		props.onAddTask({
			taskName: enteredTaskName,
			taskDescription: enteredTaskDescription,
			taskPoints: enteredTaskPoints
		})

		taskNameRef.current.value = ''
		taskDescriptionRef.current.value = ''
		taskPointsRef.current.value = ''
	}
	return (
		<form onSubmit={submitTaskHandler}>
			<div>
				<label htmlFor="taskname">Task title</label>
				<input
					id="taskname"
					type="text"
					name="taskname"
					ref={taskNameRef}
					className={taskNameControlClasses}
					//onFocus={removeInvalidClassHandler}
				/>
			</div>
			<div>
				<label htmlFor="taskDescription">Task desctiption</label>
				<input
					id="taskDescription"
					type="text"
					name="taskDescription"
					ref={taskDescriptionRef}
					className={taskDescriptionControlClasses}
					//onFocus={removeInvalidClassHandler}
				/>
			</div>
			<div>
				<label htmlFor="taskPoints">Points</label>
				<input
					id="taskPoints"
					type="number"
					name="points"
					min="0"
					ref={taskPointsRef}
					className={taskPointsControlClasses}
					//onFocus={removeInvalidClassHandler}
				/>
			</div>
			{/* <div>
				<label htmlFor="member">Assign member to task</label>
				<select
					id="member"
					name="member"
					ref={taskAssigneeRef}
					className={taskAssigneeControlClasses}>
					<option value="">--Please choose--</option>
					{props.members ? (
						<>
							{props.members.map((member) => (
								<option
									key={member.id}
									value={member.id}>
									{member.name}
								</option>
							))}
						</>
					) : null}
				</select>
			</div> */}
			<style jsx>{`
				input {
					border: 1px solid black;
				}
				.invalid {
					border: 1px solid red;
				}
			`}</style>
			<button type="submit">Add Task</button>
		</form>
	)
}

export default AddTaskForm


