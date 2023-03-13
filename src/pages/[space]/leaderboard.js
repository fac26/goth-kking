import { useRouter } from 'next/router'
import Layout from '@components/Layout'
import Ranking from '@components/Ranking'

function Leaderboard() {
	const router = useRouter()
	const pathArr = router.asPath.split('/')

	return (
		<Layout id={pathArr[1]}>
			<Ranking spaceId={pathArr[1]} />
		</Layout>
	)
}

export default Leaderboard
