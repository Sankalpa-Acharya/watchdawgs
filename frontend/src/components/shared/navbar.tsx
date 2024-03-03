import { Link } from "react-router-dom"
import { Clapperboard } from 'lucide-react';

type Props = {}

export default function navbar({ }: Props) {
    return (
        <div className='flex justify-center text-lg'>
            <nav className='bg-backgroundsec shadow-xl flex justify-between items-center p-5 rounded-3xl w-max-[80rem] w-[80rem]'>
                <Link to='/' className='font-bold flex gap-2'>
                    <Clapperboard className="text-indigo-300" />
                    WatchDawgs
                </Link>
                <ul className="flex gap-5 items-center">
                    <Link to='/suggest'>Suggest</Link>
                    <Link to='/movies'>Memes</Link>

                    <Link to='/movies' className="btn-secondary">signup</Link>
                    <Link to='/movies' className="btn-primary">Login</Link>
                </ul>
            </nav>
        </div>
    )
}