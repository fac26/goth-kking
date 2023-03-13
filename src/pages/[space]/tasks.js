//localhost:3000/tasks
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'

import { useRouter } from 'next/router'
import ListOfTasks from 'components/tasks/ListOfTasks'
import Layout from 'components/Layout'
import AddTaskForm from 'components/tasks/AddTaskForm'
import { useState, useEffect } from 'react'
const tasklist = [
	{ id: 1, taskName: 'task 1', assignedMember: 'basil', taskPoints: 10 }
]

function Tasks() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1)
	const pathArr = router.asPath.split('/')

	//
	const session = useSession()

	const [members, setMembers] = useState('')
	const [task, setTask] = useState('')

	useEffect(() => {
		getSpaceMembers()
		//getSpaceTasks()
		if (!session) {
			router.push('/') //when navigates to page shows error
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session])

	const getSpaceMembers = async () => {
		if (!session) {
			return
		}

		const spacesResponse = await supabase.rpc('get_members', {
			sp_id: pathArr[1]
		})

		const spaceMembers = spacesResponse.data.map((member) => ({
			id: member.member_id,
			name: member.member_nickname
		}))
		setMembers(spaceMembers)

		console.log(members)
		//router.push('/tasks')
	}

	const addTaskHandler = async (task) => {
		const newTask = {
			name: task.taskName,
			description: task.taskDescription,
			spaceId: pathArr[1],
			taskPoints: task.taskPoints,
			createdByUserId: user.id,
			assigneeId: task.taskAssignee
		}
		console.log(newTask)
		try {
			const spacesResponse = await supabase.rpc('add_task', newTask)
			console.log(spacesResponse)
		} catch (error) {
			console.error(error.message)
		}
	}

	return (
		<>
			<Layout id={pathArr[1]}>
				<button>AddTask</button>
				<AddTaskForm
					members={members}
					onAddTask={addTaskHandler}
				/>
				<ListOfTasks tasks={tasklist} />
			</Layout>
		</>
	)
}
///
// export async function getStaticProps() {}

export default Tasks
