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
	const path = router.asPath.slice(1)
	const pathArr = router.asPath.split('/')

	const session = useSession()

	const [members, setMembers] = useState('')
	const [tasks, setTasks] = useState('')

	useEffect(() => {
		// getSpaceMembers()
		getTasksBySpaceId(pathArr[1])
		//getSpaceTasks()
		if (!session) {
			router.push('/') //when navigates to page shows error
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session, pathArr[1]])

	// const getSpaceMembers = async () => {
	// 	if (!session) {
	// 		return
	// 	}

	// 	const spacesResponse = await supabase.rpc('get_members', {
	// 		sp_id: pathArr[1]
	// 	})

	// 	console.log(pathArr[1])
	// 	const spaceMembers = spacesResponse.data.map((member) => ({
	// 		id: member.member_id,
	// 		email: member.member_email
	// 	}))

	// 	setMembers(spaceMembers)

	// 	console.log(spaceMembers)
	// 	console.log(members)
	// 	//router.push('/tasks')
	// }

	const getTasksBySpaceId = async (spaceId) => {
		const { data, error } = await supabase
			.from('tasks')
			.select('*')
			.eq('space_id', spaceId)

		if (error) {
			console.error(error)
			return null
		}

		setTasks(data)
	}

	// const tasksDB = getTasksBySpaceId(pathArr[1])
	// console.log(tasksDB)

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
			console.log(spacesResponse)
			setTasks((prevState) => [...prevState, spacesResponse.data[0]])
			getTasksBySpaceId(pathArr[1]) // <-- Update tasks state after adding new task
		} catch (error) {
			console.error(error.message)
		}
	}

	return (
		<>
			<Layout id={pathArr[1]}>
				<button>AddTask</button>
				<AddTaskForm onAddTask={addTaskHandler} />
				<ListOfTasks tasks={tasks} />
			</Layout>
		</>
	)
}
///
// export async function getStaticProps() {}

export default Tasks
