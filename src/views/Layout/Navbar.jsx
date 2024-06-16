import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import { useUserDetailQuery } from '../../endpoints/apislice';
import { Input } from '../../components/Inputs';


export default function Navbar() {
  const navigate = useNavigate();
  const { data: userDetail } = useUserDetailQuery();
  console.log(userDetail);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/chat/login');
  };
  return (
    <>
      <div className='navbar-container'>
        <div className='avatar'>
          <Icon icon="fluent-emoji-flat:bubbles" width={35} />
        </div>
        <div className='title'>
          <span>Chat Bubble</span>
          <span style={{ width: '300px', marginBottom: '5px' }}>
            <Input
              borderRadius={'25px'}
              backgroundColor={"inherit"}
              borderWidth={'2px'}
              color={'white'}
              isIcon={true}
              icon={<Icon icon="wpf:search" width={20} />}
            />
          </span>
        </div>
        <div className='setting' onClick={handleLogout}>
          <Icon icon="hugeicons:logout-03" width={35} />
        </div>
      </div>
    </>
  )
}
