import '@styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import Navbar from '@components/Navbar'
import { ChevronDoubleLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import Avatar from 'components/Avatar'
import Image from 'next/image'
import goblin from '../assets/goblin.jpg'

function MyApp({ Component, pageProps }) {
	const [supabase] = useState(() => createBrowserSupabaseClient())
	const [open, setOpen] = useState(true);
	const Menus = [
		{ title: "Home", src: "Home"},
		{ title: "Members", src: "User", gap: true},
		{ title: "Tasks", src: "Folder", gap: true},
		{ title: "Leaderboard", src: "Chart"},
		{ title: "Settings", src: "Setting"}
	]
	return (
		<>
		<div className='flex'>
			<div 
			className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
			<ChevronDoubleLeftIcon className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && 'rotate-180'}`}
			onClick={()=>setOpen(!open)}/>
			<div classname="flex gap-x-4 items-center">
				<Image
				src={goblin}
				alt="logo"
				width={100}
				height={100}
				className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/>
				<h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>
			</div>
			</div>
			<ul className='pt-6'>
				{Menus.map((menu,index)=>(
					<li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && 'bg-light-white'}}`}>
					<img src={`./src/assets/${menu.src}.png`}/>
					<span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
					</li>
				))}
			</ul>
			<div className='p-7 text-2xl font-semibold flex-1 h-screen'>
		<SessionContextProvider
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}>
			<Component {...pageProps} />
		</SessionContextProvider>
		</div>
		</div>
		</>
	);
};
export default MyApp
