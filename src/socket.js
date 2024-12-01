import {io} from 'socket.io-client';

const SOCKET_URL = 'http://192.168.229.129:5000';

const socket = io(SOCKET_URL, {
    autoConnect : false,
    transports: ["websocket", "polling"]
});

socket.on("connect", () => {
    console.log("Connected to the server");
});

socket.on("connect_error", (err) => {
    console.error("Connection error:", err);
});


export default socket;