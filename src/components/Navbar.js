import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const Navbar = ({ user }) => {
    const handleSignOut = () => {
        // handle sign out logic here
    };


    return (
        <div>
            <nav className="bg-gray-800 py-4" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />
            <div className="flex justify-between items-center">
                <div className="flex items-center">

                    <Link className="text-white font-semibold text-lg" href="/task-app">
                        Add Task</Link></div>
                <div className="flex items-center">
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/members">
                        Members</Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/tasks">Tasks</Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/leaderboard">Leaderboard</Link>
                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/landing-page">Landing Page</Link>
                </div>

                {user && (
                    <>
                        <div className="ml-3 relative" />
                        <div />
                        <button
                            className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:shadow-solid"
                            id="user-menu"
                            aria-label="User menu"
                            aria-haspopup="true"
                        >
                            <Image className="h-8 w-auto mr-2" src="/logo.png" alt="user Avatar" width={32} height={32} />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
export default Navbar;
