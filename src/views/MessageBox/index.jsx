import React, { useState, useRef, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Icon } from '@iconify-icon/react';
import './MessageBox.scss';
import ChatInputIndex from '../../components/ChatInput';
import { capitalizeFirstLetter } from '../../services/functions';
import { useUserDetailQuery } from '../../endpoints/apislice';
import { useSendMessagesMutation, useGetMessagesMutation } from '../../endpoints/userSlice';
import useMessages from '../../hooks/hooks';

export default function MessageIndex() {
  let { UserId } = useParams();
  const location = useLocation();
  const messagesss = useMessages();
  // const socket = useOutletContext();
  const { state } = location;
  const triggerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState([])
  const [receiverId, setReceiverId] = useState("");
  const { data: userDetail } = useUserDetailQuery({}, { refetchOnMountOrArgChange: true });
  const [sendMessagesTrigger] = useSendMessagesMutation();
  const [getMessagesTrigger, {data : allMessage}] = useGetMessagesMutation()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);


  // console.log('data==>', allMessage)


  const handleSendMsg = async (msg) => {
    if (!userDetail?._id && receiverId) {
      alert('ids is missing');
    }
    const payload = {
      "sender": userDetail?._id,
      "recipients": receiverId,
      "content": msg,
      "messageType": "text",
    }
    console.log('sending msg', payload);
    sendMessagesTrigger(payload);
    getMessagesTrigger({
      "sender": userDetail?._id,
      "recipients": receiverId,
    });

    const msgs = [...messages];
    msgs.push({fromSelf : true, message : msg});
    setMessages(msgs);

  }

  useEffect(()=> {
    if(messagesss){
      getMessagesTrigger({
        "sender": userDetail?._id,
        "recipients": receiverId,
      });
    }
  }, [messagesss])


  useEffect(()=> {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage])

  }, [arrivalMessage])

  useEffect(() => {
    if (state?.id) {
      scrollToBottom();
      setReceiverId(state?.id);
      if (userDetail?._id && state?.id) {
        getMessagesTrigger({
          "sender": userDetail?._id,
          "recipients": state?.id
        })
      }

      // console.log('in message id==>', state?.id)
      // console.log('in message name==>', UserId)
    }
  }, [state?.id, userDetail?._id]);


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
        {allMessage?.length > 0 && allMessage?.map((ele, index) => (
          <div key={ele._id}>
            {userDetail?._id === ele.sender && <div className='sender-message'>
              <span style={{ color: 'white' }}>{ele.content}</span>
              <span className='timeStamp-s'>{formatDateOrTime(ele.timestamp)}</span>
            </div>}
            {receiverId === ele.sender && <div className='receiver-message'>
              <span style={{ color: 'white' }}>{ele.content}</span>
              <span className='timeStamp-r'>{formatDateOrTime(ele.timestamp)}</span>
            </div>}
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


function formatDateOrTime(dateString) {
  const date = new Date(dateString);
  const today = new Date();

  // Check if the date is today
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  if (isToday) {
    // If today, return the time in HH:mm format
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  } else {
    // Otherwise, return the date in dd/mm format
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}-${hours}:${minutes}`;
  }
}
