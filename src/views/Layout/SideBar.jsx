import React, { useState } from 'react';
import { Icon } from '@iconify-icon/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGetContactListQuery } from '../../endpoints/userSlice';

export default function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { data: contactlistData, isLoading } = useGetContactListQuery({}, { refetchOnMountOrArgChange: true });
    const { data: contactdata } = contactlistData || {};
    // console.log('contactlist', state)
    const [selectedUserName, setSelectedUserName] = useState(null);

    const handleUserClick = (userName, userId) => {
        setSelectedUserName(userName);
        navigate(`${userName}`, { state: { id: userId } });
    };
    return (
        <div className='sidebar-container'>
            <div className='chat-heading'>
                <span>Chats</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Icon icon="f7:status" />
                    <Icon icon="fluent:people-community-add-24-filled" />
                </div>
            </div>
            {/* <div className='recent-chat-container'>
                <p>Recents Chats</p>
            </div> */}
            <div className='all-chats-container'>
                <p>All Chats</p>
                {isLoading ?
                    <>
                        {[1, 2].map((ele) => (
                            <div key={ele} className='chatlist-loading'>
                            </div>
                        ))}
                    </>
                    :
                    contactdata?.friends?.length > 0 ? contactdata?.friends?.map((ele, index) => (
                        <div
                            key={ele?.userName}
                            className={`chatlist ${(selectedUserName === ele?.userName || state?.id === ele?._id) ? 'selected' : ''}`}
                            onClick={() => handleUserClick(ele?.userName, ele?._id)}
                        >
                            <div className='userlogo'>
                                <Icon width={'100%'} icon="emojione-v1:boy" />
                                {/* <Icon  width={'inherit'} icon="emojione-v1:woman" /> */}
                            </div>
                            <div className='username'>
                                <span>{ele?.userName}</span>
                            </div>
                        </div>
                    )) :
                        <div className='chatlist'>
                            <p>No Contact Found !!!</p>
                        </div>
                }

            </div>

        </div>
    )
}
