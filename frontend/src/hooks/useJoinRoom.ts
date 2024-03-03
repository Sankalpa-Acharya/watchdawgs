import { useEffect, useState } from 'react'

export default function useJoinRoom(uuid: string) {
    const [token, setToken] = useState('');

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const response = await fetch('http://localhost:3000/join-room', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
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


    return { token }
}
