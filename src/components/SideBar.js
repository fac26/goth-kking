import { forwardRef } from 'react'
import Link from 'next/link'
import {
	HomeIcon,
	CreditCardIcon,
	UserIcon,
	TrophyIcon,
	BookOpenIcon
} from '@heroicons/react/solid'

import { useRouter } from 'next/router'

const SideBar = forwardRef(({ showNav }, ref) => {
	const router = useRouter()

	return (
		<div
			ref={ref}
			className="fixed w-56 h-full bg-white shadow-sm">
			<div className="flex justify-center mt-6 mb-14">
				<picture>
					<img
						className="w-32 h-auto"
						src="/ferox-transparent.png"
						alt="company logo"
					/>
				</picture>
			</div>

			<div className="flex flex-col">
				<Link href="/">
					<div
						className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
							router.pathname == '/'
								? 'bg-orange-100 text-orange-500'
								: 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
						}`}>
						<div className="mr-2">
							<HomeIcon className="h-5 w-5" />
						</div>
						<div>
							<p>Home</p>
						</div>
					</div>
				</Link>
				{/* members */}
				<div className="flex flex-col">
					<Link href="/members">
						<div
							className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
								router.pathname == '/members'
									? 'bg-orange-100 text-orange-500'
									: 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
							}`}>
							<div className="mr-2">
								<UserIcon className="h-5 w-5" />
							</div>
							<div>
								<p>Members</p>
							</div>
						</div>
					</Link>
					{/* Tasks */}
					<div className="flex flex-col">
						<Link href="/tasks">
							<div
								className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
									router.pathname == '/tasks'
										? 'bg-orange-100 text-orange-500'
										: 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
								}`}>
								<div className="mr-2">
									<CreditCardIcon className="h-5 w-5" />
								</div>
								<div>
									<p>Tasks</p>
								</div>
							</div>
						</Link>
					</div>
					{/* Leaderboard */}
					<div className="flex flex-col">
						<Link href="/leaderboard">
							<div
								className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
									router.pathname == '/leaderboard'
										? 'bg-orange-100 text-orange-500'
										: 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
								}`}>
								<div className="mr-2">
									<TrophyIcon className="h-5 w-5" />
								</div>
								<div>
									<p>Leaderboard</p>
								</div>
							</div>
						</Link>
						{/* Landing page */}
						<div className="flex flex-col">
							<Link href="/landingpage">
								<div
									className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
										router.pathname == '/landingpage'
											? 'bg-orange-100 text-orange-500'
											: 'text-gray-400 hover:bg-orange-100 hover:text-orange-500'
									}`}>
									<div className="mr-2">
										<BookOpenIcon className="h-5 w-5" />
									</div>
									<div>
										<p>Landing Page</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
})

SideBar.displayName = 'SideBar'

export default SideBar
