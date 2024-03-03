import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/shared/navbar"
import { PersonStanding } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';


export default function HomePage() {
    const navigate = useNavigate();
    const joinRoom = () => {
        const roomId = uuidv4();
        navigate(`/room?id=${roomId}`);
    }
    return (
        <div className="flex flex-col ">
            <div className="mt-10">
                <NavBar></NavBar>
            </div>
            <div className="flex justify-center grow-1">
                <main className="w-max-[90rem] flex flex-col items-center justify-center px-[10rem] w-[90rem]">
                    <h1 className="font-bold text_gradient  flex mt-[10rem]">Watch together !<PersonStanding />
                    </h1>
                    <p>Shared Moments, Shared Joy: Your Virtual Hangout Hub. 🤲</p>
                    <div className="flex gap-5 mt-10">
                        <button className="btn-secondary" onClick={joinRoom}>Create Room</button>
                        <button className="btn-primary">Join Room</button>
                    </div>
                </main>
            </div>

            <footer className="fixed bottom-0 border w-full gradient">sad</footer>
        </div>
    )
}