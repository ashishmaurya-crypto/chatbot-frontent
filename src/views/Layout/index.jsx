import React, {useRef, useEffect} from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import './Layout.scss';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Welcome from './Welcome';
import { io } from 'socket.io-client';
import { useUserDetailQuery } from '../../endpoints/apislice';

export default function LayOutIndex() {
    const socket = useRef();
    const { data: userDetail } = useUserDetailQuery({});
    const checkOutlet = useOutlet();
    const baseUrl = 'http://localhost:5000/';

    useEffect(()=> {
        console.log('layout', userDetail)
        if(userDetail?._id){
            socket.current = io(baseUrl);
            socket.current.emit("add-user", userDetail?._id)

        }
        
    },[userDetail?._id])

    return (
        <>
            <div className='chat-navigation-bar'>
                <Navbar />
            </div >
            <div className='chat-layout-container'>
                <div className='chat-layout-sidebar-container'>
                    <SideBar />
                </div>
                <div className='chat-layout-content-container'>
                    {/* <Outlet /> */}
                    {checkOutlet ?  <Outlet context={socket} /> : <Welcome/>}
                </div>
            </div>
        </>
    )
}
