import React, { useState } from 'react';
import { Clapperboard, Search } from 'lucide-react';
import { extractVideoId } from '../helper/index';
import { Link } from 'react-router-dom';

type Props = {
    onSubmit: () => void;
};

export default function SuggestPage() {
    const [input, setInput] = useState('');
    const [videos, setVideos] = useState([]);

    const searchVideo = async () => {
        const response = await fetch(`https://lazypanda00.pythonanywhere.com?query=${input}`);
        const info = await response.json();
        setVideos(info);
    };

    return (
        <div>
            <div className="bg-backgroundsec p-5 flex justify-center items-center">
                <nav className="w-[70rem] w-max-[70rem] items-center flex gap-10">
                    <Link to="/" className="font-bold text-2xl flex gap-2">
                        <Clapperboard className="text-indigo-300" />
                        WatchDawgs
                    </Link>
                    <div className="grow flex gap-2">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search your Videos"
                            required
                        />
                        <button onClick={searchVideo} className="bg-gray-800 px-4 rounded-xl">
                            <Search />
                        </button>
                    </div>
                </nav>
            </div>
            <div className="flex justify-center">
                <div className="max-w-[70rem] w-[70rem]">
                    <div className='grid grid-cols-3 gap-3'>

                        {videos.map((e, index) => (
                            <Link to={e.link} key={index}>
                                <img src={`https://img.youtube.com/vi/${extractVideoId(e.link)}/0.jpg`} alt="" />
                                <p>{e.title}</p>
                                <button className='bg-indigo-800 rounded-xl mt-4 px-4 py-1'>Watch Now</button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
