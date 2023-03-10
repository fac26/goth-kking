//localhost:3000/tasks
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react'

import { useRouter } from 'next/router'
import ListOfTasks from 'components/tasks/ListOfTasks'
const tasklist = [
	{ id: 1, taskName: 'task 1', assignedMember: 'basil', taskPoints: 10 }
]

function Tasks() {
	const user = useUser()
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1)
	const pathArr = router.asPath.split('/')
	console.log(path, pathArr, user)
	return (
		<>
			<button>AddTask</button>
			<ListOfTasks tasks={tasklist} />
		</>
	)
}
///
// export async function getStaticProps() {}

export default Tasks
