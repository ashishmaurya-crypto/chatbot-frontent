import { useEffect, useState } from 'react';
import { useUserDetailQuery } from '../endpoints/apislice';
import socket from '../socket';

const useMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Connect the socket
    socket.connect();

    // Listen for incoming messages
    socket.on('new_message', (message) => {
      console.log('Message received:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket listener on unmount
    return () => {
      socket.off('new_message'); // Remove the event listener
      socket.disconnect(); // Disconnect the socket
    };
  }, []);

  return messages;
};


export const useSocketConnection = () => {
    const [isConnected, setIsConnected] = useState(false);
    const { data: userDetail, isLoading } = useUserDetailQuery({});

    useEffect(() => {
        // If user details are not yet available, do nothing
        if (!userDetail?._id || isLoading) return;

        console.log('Attempting to establish socket connection...', userDetail._id);

        // Define event handlers
        const handleConnect = () => {
            console.log('Socket connected');
            setIsConnected(true);
            socket.emit('register', { userId: userDetail._id, userName : userDetail.userName });
        };

        const handleDisconnect = () => {
            console.log('Socket disconnected');
            setIsConnected(false);
        };

        const handleError = (error) => {
            console.error('Socket error:', error);
        };

        // Attach event listeners
        socket.on('connect', handleConnect);
        socket.on('disconnect', handleDisconnect);
        socket.on('error', handleError);

        // Manually connect the socket
        if (!socket.connected) {
            socket.connect();
        }

        // Cleanup on unmount or dependency change
        return () => {
            console.log('Cleaning up socket listeners...');
            socket.off('connect', handleConnect);
            socket.off('disconnect', handleDisconnect);
            socket.disconnect(); // Optional: Disconnect if the user logs out
        };
    }, [userDetail?._id, isLoading]);

};

export default useMessages;