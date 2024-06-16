import React from 'react';
import { Icon } from '@iconify-icon/react';

export default function SideBar() {
    return (
        <div className='sidebar-container'>
            <div className='chat-heading'>
                <span>Chats</span>
                <div style={{display : 'flex', gap : '10px'}}>
                    <Icon icon="f7:status" />
                    <Icon icon="fluent:people-community-add-24-filled" />
                </div>
            </div>
            {/* <div className='recent-chat-container'>

            </div> */}
            <div className='all-chats-container'>

            </div>

        </div>
    )
}
