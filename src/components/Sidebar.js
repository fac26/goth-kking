import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import {
	HomeIcon,
	CreditCardIcon,
	UserIcon,
	TrophyIcon
} from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'

function Sidebar({ children }) {
	const [open, setOpen] = useState(true)
	const supabase = useSupabaseClient()
	const menus = [
		{ title: 'Home', icon: <HomeIcon />, path: '/' },
		{ title: 'Members', icon: <UserIcon />, path: '/members' },
		{ title: 'Tasks', icon: <CreditCardIcon />, path: '/tasks' },
		{ title: 'Leaderboard', icon: <TrophyIcon />, path: '/leaderboard' }
	]

	// { title: "Landing Page", icon: <BookOpenIcon/>, path: "/landingpage"}
	const router = useRouter()
	return (
		<>
			<div className="flex">
				<div
					className={`${
						open ? 'w-72' : 'w-20'
					} duration-300 h-screen p-5 pt-8 bg-green relative`}>
					<div className="flex gap-x-4 items-center">
						<Image
							src={logo}
							alt="logo"
							width={100}
							height={100}
							className={`cursor-pointer duration-500 ${
								open && 'rotate-[360deg] xl:bg-transparent'
							}`}
							onClick={() => setOpen(!open)}
						/>
						<h1
							className={`text-white origin-left font-medium text-xl duration-300 ${
								!open && 'scale-0'
							}`}>
							G.O.T.H or spacename
						</h1>
					</div>
					<ul className="pt-6">
						{menus.map((menu) => (
							<li key={menu.path}>
								<Link
									href={menu.path}
									className={`${
										!open && 'hidden'
									} origin-left duration-200 text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-black rounded-md ${
										router.pathname === menu.path && 'bg-black'
									}`}>
									<span className="inline-block w-6 h-6">{menu.icon}</span>
									{menu.title}
								</Link>
							</li>
						))}
					</ul>
					{open && (
						<button
							className={`text-white`}
							onClick={() => supabase.auth.signOut()}>
							Sign Out
						</button>
					)}
				</div>
				<div className="p-7 text-2xl font-semibold flex-1 h-screen"></div>
				{children}
			</div>
		</>
	)
}

export default Sidebar
