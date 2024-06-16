import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Navbar from './Navbar';
import SideBar from './SideBar';
import MessageIndex from '../MessageBox';

export default function LayOutIndex({ children }) {

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
                    <MessageIndex/>
                </div>
            </div>
        </>
    )
}
