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
	const pathArr = router.asPath.split('/')

	const session = useSession()

	const [members, setMembers] = useState('')
	const [tasks, setTasks] = useState('')
	const [taskId, setTaskId] = useState('')
	const [memberId, setMemberId] = useState([])

	useEffect(() => {
		// getSpaceMembers()
		getTasksBySpaceId(pathArr[1])
		getMembersBySpaceId(pathArr[1])
		//getSpaceTasks()
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
	console.log(tasks)

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
		setMemberId(listOfMemberIds)
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
			
			const taskId = spacesResponse.data[0].id
			setTaskId(taskId)
			console.log(taskId) //61 so the last inserted task

		} catch (error) {
			console.error(error)
		}
	}
	
	//write from here
	const addTaskInRotationHandler = async (e) =>  {
		e.preventDefault()

		let rotationPosition = 0;
		rotationPosition = (rotationPosition + 1) % memberId.length
		
		console.log(taskId) //66 
		console.log(memberId) //[56, 112, 113]
		for (let i = 0; i < memberId.length; i++) {
			try {
				const {data, error } = await supabase
					.from('rotation')
					.insert([{task_id: taskId, member_id: memberId[i], rotation_position: rotationPosition}])
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
	}
	
	
	return (
		<>
			<Layout id={pathArr[1]}>
				<AddTaskForm onAddTask={addTaskHandler} />
				<button onClick={addTaskInRotationHandler}>Add to rotation table</button> 
				{/* or onSubmit */}
				{/* then merge the two buttons later on */}
				<ListOfTasks
					tasks={tasks}
					members={members}
				/>
			</Layout>
		</>
	)
}

export default Tasks

//according to the member length, you should add that number of rows
//or according to the name present add a row