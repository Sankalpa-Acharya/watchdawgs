import NavBar from '../components/shared/room_navbar';
import ReactPlayer from 'react-player';
import { Send } from 'lucide-react';
import Conference from '../components/conference';
import { useLocation } from 'react-router-dom';

type Props = {};

export default function RoomPage({ }: Props) {
    // const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id') || '';
    // const { token } = useJoinRoom(id);
    // console.log(token)


    return (
        <div className='flex flex-col h-screen'>
            <NavBar onSubmit={() => { }} />
            <div className='flex flex-1'>
                <div className='w-3/4 mt-5 flex flex-col justify-between items-center '>
                    <ReactPlayer
                        style={{ width: '100%' }}
                        width='70rem'
                        height='30rem'
                        url='https://www.youtube.com/watch?v=tWYsfOSY9vY'
                        controls
                    />
                    <div>
                    </div>
                    <div className='w-full px-16'>
                        <h2 className='text-xl text-gray-400 font-bold mt-4'>Other Related Content</h2>
                    </div>
                    <Conference uuid={id}></Conference>
                </div>
                <div className='w-1/4 flex flex-col bg-gray-900 p-2'>
                    <div className='grow'>
                        <div className='flex flex-col gap-2'>
                            <p>
                                Sankalpa: Hello All
                            </p>
                            <p>
                                Vraj: Hi
                            </p>
                            <p>
                                Soumitra: lol
                            </p>
                            <p>
                                Nishit: I'm hungry
                            </p>
                            <p>
                                Vinit: Okay!
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-between'>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your message" required />
                        <button className='bg-green-700 rounded-md px-2'><Send /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
