import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'
import Ranking from '@components/Ranking'

function Leaderboard() {
	const router = useRouter()
	const path = router.asPath.slice(1)
	const pathArr = router.asPath.split('/')

	return (
		<Layout id={pathArr[1]}>
			<Ranking />
		</Layout>
	)
}

export default Leaderboard
