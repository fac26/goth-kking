import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'

function Leaderboard() {
	const [members, setMembers] = useState([])
	const supabase = useSupabaseClient()
	const router = useRouter()
	const path = router.asPath.slice(1)
	const pathArr = router.asPath.split('/')

	console.log
	useEffect(() => {
		fetchMembers()
	}, [])

	async function fetchMembers() {
		const { data, error } = await supabase
			.from('space_members')
			.select('member_nickname', 'points')
			.order('points', { ascending: false })

		if (error) {
			console.log(error)
		} else {
			setMembers(data)
		}
	}

	return (
		<Layout id={pathArr[1]}>
			<div>
				<ol>
					{members.map((member) => (
						<li key={member.member_nickname}>
							{member.member_nickname} - {member.points}
						</li>
					))}
				</ol>
			</div>
		</Layout>
	)
}

export default Leaderboard
