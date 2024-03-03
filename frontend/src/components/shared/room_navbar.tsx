import React, { useState } from 'react'
import { Clapperboard, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
type Props = { onSubmit: () => void }

export default function room_navbar({ }: Props) {
    return (
        <div className='bg-backgroundsec p-5 flex justify-center items-center'>
            <nav className='w-[70rem] w-max-[70rem] items-center flex gap-10'>
                <Link to='/' className='font-bold text-2xl flex gap-2'>
                    <Clapperboard className="text-indigo-300" />
                    WatchDawgs
                </Link>
                <div className='grow flex gap-2'>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your Videos" required />
                    <button className='bg-gray-800 px-4 rounded-xl'>
                        <Search />
                    </button>
                </div>
            </nav>
        </div>
    )
}