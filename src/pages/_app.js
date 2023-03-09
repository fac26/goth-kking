import '@styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import Navbar from '@components/Navbar'
import {  HomeIcon, CreditCardIcon, UserIcon, TrophyIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import Avatar from 'components/Avatar'
import Image from 'next/image'
import goblin from '../assets/goblin.jpg'

function MyApp({ Component, pageProps }) {
	const [supabase] = useState(() => createBrowserSupabaseClient())
	const [open, setOpen] = useState(true);
	const menus = [
		{ title: "Home", icon: <HomeIcon/> },
		{ title: "Members", icon: <UserIcon/>},
		{ title: "Tasks", icon: <CreditCardIcon/>},
		{ title: "Leaderboard", icon: <TrophyIcon/>},
		{ title: "Landing Page", icon: <BookOpenIcon/>}
	]
	return (
		<>
		<div className='flex'>
			<div 
			className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
			<div classname="flex gap-x-4 items-center">
				<Image
				src={goblin}
				alt="logo"
				width={100}
				height={100}
				className={`cursor-pointer duration-500 ${open && "rotate-[360deg] xl:bg-transparent"}`} onClick={()=>setOpen(!open)}/>
				<h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>G.O.T.H or spacename</h1>
			</div>
			<ul className='pt-6'>
				{menus.map((menu,index)=>(
					<li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md  ${index === 0 && 'bg-light-white'}}`}>
						<span className='h-5 w-5'>{menu.icon}</span>
					<span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
					</li>
				))}
			</ul>
			</div>
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

//add icons, that will prbs change the look of the navbar-change line 41
//create list/dictionary of the navbar items and their links
//every menu item is a link
//add topbar 
