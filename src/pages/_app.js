import '@styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import {  HomeIcon, CreditCardIcon, UserIcon, TrophyIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'
import logo from '../assets/logo.png'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
	const [supabase] = useState(() => createBrowserSupabaseClient())
	const [open, setOpen] = useState(true);
	const menus = [
		{ title: "Home", icon: <HomeIcon/>, path: "/" },
		{ title: "Members", icon: <UserIcon/>, path: "/members"},
		{ title: "Tasks", icon: <CreditCardIcon/>, path: "/tasks"},
		{ title: "Leaderboard", icon: <TrophyIcon/>, path: "/leaderboard"},
		{ title: "Landing Page", icon: <BookOpenIcon/>, path: "/"}
	]
	return (
		<>
		<div className='flex'>
			<div 
			className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-green relative`}>
			<div classname="flex gap-x-4 items-center">
				<Image
				src={logo}
				alt="logo"
				width={100}
				height={100}
				className={`cursor-pointer duration-500 ${open && "rotate-[360deg] xl:bg-transparent"}`} onClick={()=>setOpen(!open)}/>
				<h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>G.O.T.H or spacename</h1>
			</div>
			<ul className='pt-6'>
			{menus.map(menu => (
			<li key={menu.path}>
				<Link href={menu.path} className={`${!open && 'hidden'} origin-left duration-200 text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-black rounded-md `}>
				<span className="inline-block w-6 h-6">{menu.icon}</span>{menu.title}
				</Link>
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

//create list/dictionary of the navbar items and their links
//every menu item is a link
//when page is selected the hover effect stays
//add topbar 
