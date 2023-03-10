import '@styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import Navbar from '@components/Navbar'

function MyApp({ Component, pageProps }) {
	const [supabase] = useState(() => createBrowserSupabaseClient())

	return (
		<SessionContextProvider
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}>
			<Component {...pageProps} />
		</SessionContextProvider>
	)
}
export default MyApp

// test export from tailwind css installation guide for next.js
// export default function MyApp() {
// 	return (
// 		<h1 className="text-3xl font-bold underline">
// 			Hello world!
// 		</h1>
// 	)
// }
