import React, {useRef, useEffect} from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import './Layout.scss';
import Navbar from './Navbar';
import SideBar from './SideBar';
import Welcome from './Welcome';
import { io } from 'socket.io-client';
import { useUserDetailQuery } from '../../endpoints/apislice';
import { useSocketConnection } from '../../hooks/hooks';

export default function LayOutIndex() {
    const checkOutlet = useOutlet();
    useSocketConnection()

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
                    {checkOutlet ?  <Outlet /> : <Welcome/>}
                </div>
            </div>
        </>
    )
}
