import '@livekit/components-styles';
import {
    ControlBar,
    GridLayout,
    LiveKitRoom,
    ParticipantTile,
    RoomAudioRenderer,
    useTracks
} from '@livekit/components-react';
import { Track } from 'livekit-client';
import { useState, useEffect } from 'react';

// api key: APIoRTAJw6ZPArz
// secret key: 9OSIpbbH9TX5wNzDpfShim4GNCuykn3eWM4OJxH5CRR

const serverUrl = 'wss://watchdawgs-0mqo3ko8.livekit.cloud';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDk0NTQ5OTUsImlzcyI6IkFQSVBUa2dNMll5V2NrNCIsIm5iZiI6MTcwOTQ1NDA5NSwic3ViIjoic2Fua2FscGEiLCJ2aWRlbyI6eyJjYW5QdWJsaXNoIjp0cnVlLCJjYW5QdWJsaXNoRGF0YSI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlLCJyb29tIjoiYmFzZW1lbnQiLCJyb29tSm9pbiI6dHJ1ZX19.HG6YP5w2TONa6vOSboMwVr99CQ-FZHXi_RA6Gokl_6U';
type Props = {
    uuid: string
}

export default function conference({ uuid }: Props) {
    const [token, setToken] = useState('')
    useEffect(() => {
        const fetchToken = async () => {
            try {

                const response = await fetch('http://localhost:3000/getToken', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ uuid: uuid })
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch token');
                }
                const data = await response.json();
                setToken(() => data.token);
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        };

        fetchToken();
    }, []);

    return (
        <div className='sticky bottom-0 w-full'>

            <LiveKitRoom
                video={true}
                audio={true}
                token={token}
                serverUrl={serverUrl}
                data-lk-theme="default"
                className='h-fit '
            >
                <MyVideoConference />
                <RoomAudioRenderer />
                <ControlBar controls={{ screenShare: false }} />
            </LiveKitRoom>
        </div>
    );
}

function MyVideoConference() {
    const tracks = useTracks(
        [
            { source: Track.Source.Camera, withPlaceholder: true },
            { source: Track.Source.ScreenShare, withPlaceholder: false },
        ],
        { onlySubscribed: false },
    );
    return (
        <GridLayout className='w-fit h-fit flex' tracks={tracks} >
            {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
            <ParticipantTile className='h-[8rem] w-[8rem]' />
        </GridLayout>
    );
}