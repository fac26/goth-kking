import { useEffect, useState } from 'react'
import {
	HomeIcon,
	CreditCardIcon,
	UserIcon,
	TrophyIcon,
	BookOpenIcon,
	UserGroupIcon
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import logo from '../assets/logo.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import TopBar from './TopBar'
import { useUser } from '@supabase/auth-helpers-react'
export default function Layout({ id, children }) {
	const supabase = useSupabaseClient()
	const session = useSession()
	const user = useUser()
	const [pathId, setPathId] = useState(id)
	const [spaceName, setSpaceName] = useState('')
	useEffect(() => {
		setPathId(id)
		getSpaceName(id)
	}, [id])

	const [open, setOpen] = useState(true)
	const menus = [
		{ title: 'Home', icon: <HomeIcon />, path: `/home`, disabled: false },
		{
			title: 'Spaces',
			icon: <UserGroupIcon />,
			path: '/spaces',
			disabled: false
		},
		{
			title: 'User Profile',
			icon: <UserIcon />,
			path: '/user-profile',
			disabled: false
		},
		{
			title: 'Members',
			icon: <UserIcon />,
			path: `/${pathId}/members`,
			disabled: pathId === undefined
		},
		{
			title: 'Tasks',
			icon: <CreditCardIcon />,
			path: `/${pathId}/tasks`,
			disabled: pathId === undefined
		},
		{
			title: 'Leaderboard',
			icon: <TrophyIcon />,
			path: `/${pathId}/leaderboard`,
			disabled: pathId === undefined
		}
	]

	const getSpaceName = async (id) => {
		const { data, error } = await supabase
			.from('spaces')
			.select('*')
			.eq('id', id)

		if (error) {
			console.error(error)
			return null
		}

		setSpaceName(data[0].name)
	}

	// const getUserProf = async (id) => {
	// 	const {data, error} = await supabase
	// 		.from('profiles')
	// 		.select('*')
	// 		.eq('id', id)
	// }
	// console.log(user.id)
	// console.log(getUserProf(user.id))
	// { title: "Landing Page", icon: <BookOpenIcon/>, path: "/landingpage"}

	// if (pathId === 'undefined') {
	// 	//lock the other navbar items
	// }
	const username ='Iman.Ghellache'
	const router = useRouter()
	return (
		<>
			<TopBar username={username
			}/>
			{session ? (
				<div className="flex">
					<div
						className={`${open ? 'w-72' : 'w-20'
							} duration-300 h-screen p-5 pt-8 bg-green relative`}>
						<div className="flex gap-x-4 items-center">
							<Image
								src={logo}
								alt="logo"
								width={100}
								height={100}
								className={`cursor-pointer duration-500 ${open && 'rotate-[360deg] xl:bg-transparent'
									}`}
								onClick={() => setOpen(!open)}
							/>
							<h1
								className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'
									}`}>
								G.O.T.H <span>{spaceName}</span>
							</h1>
						</div>
						<ul className="pt-6">
							{menus.map((menu) => (
								<li key={menu.path}>
									<Link
										href={menu.path}
										className={`${!open && 'hidden'
											} origin-left duration-200 text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md ${router.asPath === menu.path && 'bg-black'
											} ${menu.disabled
												? 'opacity-50 cursor-not-allowed'
												: 'hover:bg-black'
											}`}
										onClick={(e) => menu.disabled && e.preventDefault()}>
										<span className="inline-block w-6 h-6">{menu.icon}</span>
										{menu.title}
									</Link>
								</li>
							))}
						</ul>
						<br></br>
						{open && (
							<button
								className={`text-white`}
								onClick={() => supabase.auth.signOut() && router.push('/')}>
								Sign Out
							</button>
						)}
					</div>
					<div className="p-7 text-2xl font-semibold flex-1 h-screen">
						{children}
					</div>
				</div>
			) : null}
		</>
	)
}
