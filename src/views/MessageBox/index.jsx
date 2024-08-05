import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Icon } from '@iconify-icon/react';
import './MessageBox.scss';
import ChatInputIndex from '../../components/ChatInput';
import { capitalizeFirstLetter } from '../../services/functions';

export default function MessageIndex() {
  let { UserId } = useParams();
  const location = useLocation();
  const { state } = location;
  const triggerRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);


  const handleSendMsg = async (msg) => {
    console.log('sending', msg)
  }
  
  useEffect(() => {
    if (state?.id) {
      scrollToBottom();
      console.log('in message id==>', state?.id)
      console.log('in message name==>', UserId)
    }
  }, [state?.id])
  return (
    <div className='message-container'>
      <div className='message-header-container'>
        <div className='user-profile'>
          <div className='user-logo'>
            <Icon width={'40px'} icon="emojione-v1:boy" />
          </div>
          <div className='user-title' ref={triggerRef} onClick={() => console.log(triggerRef.current.getBoundingClientRect(), window.innerHeight)}>
            <p>{UserId && capitalizeFirstLetter(UserId)}</p>
          </div>
        </div>
        <div className='user-action'>
          <button><Icon width={'30px'} icon="pepicons-pop:dots-y" /></button>
        </div>
      </div>
      <div className='messagebox-container'>
        {[1].map((ele) => (
          <div key={ele}>
            <div className='sender-message'>
              <p style={{ color: 'white' }}>sender {ele}</p>
            </div>
            <div className='receiver-message'>
              <p style={{ color: 'white' }}>receiver</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className='messageinput-container'>
        <ChatInputIndex handleSendMsg={handleSendMsg} />
      </div>
    </div>
  )
}


// const [isInitialRender, setIsInitialRender] = useState(true);

//   const scrollToBottom = (smooth = true) => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
//     }
//   };

//   useEffect(() => {
//     if (isInitialRender) {
//       scrollToBottom(false); // No animation on initial render
//       setIsInitialRender(false);
//     } else {
//       scrollToBottom();
//     }
//   }, [state?.id]);
