//localhost:3000/tasks
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import ListOfTasks from 'components/tasks/ListOfTasks'
import Layout from 'components/Layout'
import AddTaskForm from 'components/tasks/AddTaskForm'
import { useState, useEffect } from 'react'

function Tasks() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const session = useSession()
	const pathArr = router.asPath.split('/')

	const [members, setMembers] = useState('')
	const [tasks, setTasks] = useState('')
	const [taskIds, setTaskIds] = useState([])
	const [memberIds, setMemberIds] = useState([])


	useEffect(() => {
		getTasksBySpaceId(pathArr[1])
		getMembersBySpaceId(pathArr[1])

		if (!session) {
			router.push('/')
		}
	}, [session, pathArr[1]])

	const getTasksBySpaceId = async (spaceId) => {
		const { data, error } = await supabase
			.from('tasks')
			.select('*')
			.eq('space_id', spaceId)

		if (error) {
			console.error(error)
			return
		}

		setTasks(data)
	}

	let listOfTaskIds = [];
	useEffect(() => {
		
		for (let i = 0; i < tasks.length; i++) {
		  //console.log(tasks[i].id)
		  listOfTaskIds.push(tasks[i].id)
		}
		setTaskIds(listOfTaskIds)
	  }, [tasks]);
	  
	console.log(taskIds)

	const getMembersBySpaceId = async (spaceId) => {
		const { data, error } = await supabase
			.from('space_members')
			.select('id, member_email')
			.eq('space_id', spaceId)

		if (error) {
			console.error(error)
			return
		}
		setMembers(data)
	}
	let listOfMemberIds = [];
	useEffect(() => {
		
		for (let i = 0; i < members.length; i++) {
		  console.log(members[i].id)
		  listOfMemberIds.push(members[i].id)
		}
		setMemberIds(listOfMemberIds)
	  }, [members]);
	  
	const addTaskHandler = async (task) => {
		const newTask = {
			name: task.taskName,
			description: task.taskDescription,
			space_id: pathArr[1],
			task_points: task.taskPoints,
			current_user_id: user.id
		}

		try {
			const spacesResponse = await supabase
				.from('tasks')
				.insert([newTask])
				.select()

			setTasks((prevState) => [...prevState, spacesResponse.data[0]])
			getTasksBySpaceId(pathArr[1]) // <-- Update tasks state after adding new task
			addTaskInRotationHandler()
		} catch (error) {
			console.error(error)
		}
	}
	const deleteTaskHandler = async (taskId) => {
		try {
			const { data, error } = await supabase
				.from('tasks')
				.delete()
				.match({ id: taskId })
			//setTasks((prevState) => [...prevState, spacesResponse.data[0]])
			getTasksBySpaceId(pathArr[1]) // <-- Update tasks state after adding new task
		} catch (error) {
			console.error(error)
		}
	}
	let rotationPosition = 0;

	const addTaskInRotationHandler = async () =>  {
	
		console.log(taskIds) //[103, 104] 
		console.log(memberIds) //[54, 121]
	
		for (let i = 0; i < taskIds.length; i++) {
			for (let j = 0; j < memberIds.length; j++) {

				(rotationPosition === memberIds.length) ? rotationPosition = 1 : rotationPosition++ //we can tweak this bit so it follows the pattern
				//and the task_ids should change
				  //we can tweak this bit so it follows the pattern
				//and the task_ids should change
					try {
						const {data, error } = await supabase
							.from('rotation')
							.insert([{task_id: taskIds[i], member_id: memberIds[j], rotation_position: rotationPosition}])
							.single()
							
						if (error) {
							console.error(error)
							return
						}

						console.log('Successfully added to rotation table:', data)
					} catch (error) {
						console.error(error)
					}
				}
			}}

	return (
		<>
			<Layout id={pathArr[1]}>
				<button>AddTask</button>
				<AddTaskForm onAddTask={addTaskHandler} />
				<ListOfTasks
					tasks={tasks}
					members={members}
					onDeleteTask={deleteTaskHandler}
				/>
			</Layout>
		</>
	)
}

export default Tasks
