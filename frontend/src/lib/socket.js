import { io } from 'socket.io-client';

const BACKEND_URL = import.meta.env.MODE === 'development' 
    ? 'http://localhost:5000'
    : import.meta.env.VITE_BACKEND_URL;

const socket = io(BACKEND_URL, {
    withCredentials: true,
    transports: ['websocket', 'polling'],
    path: '/socket.io/'
});

export default socket; 