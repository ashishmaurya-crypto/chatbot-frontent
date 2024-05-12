import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

export default function LayOutIndex({ children }) {
    return (
        <>
            <div className='chat-navigation-bar'>
                <p>home</p>
            </div>
            <div className='chat-layout-container'>
                <div className='chat-layout-sidebar-container'>
                    <p>sidebar</p>
                </div>
                <div className='chat-layout-content-container'>
                    <Outlet />
                </div>

            </div>
        </>
    )
}
