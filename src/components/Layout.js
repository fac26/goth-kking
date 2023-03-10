import { useSession } from '@supabase/session-client'

function Layout({ children }) {
	const { session, loading, error } = useSession()

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	if (!session) return <div>Session not initialized</div>

	return (
		<div>
			{/* your header */}
			{React.cloneElement(children, { session })}
			{/* your footer */}
		</div>
	)
}

export default Layout
