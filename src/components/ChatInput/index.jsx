import React, { useState } from 'react';
import './ChatInput.scss';
import EmojiPicker from 'emoji-picker-react';
import { Icon } from '@iconify-icon/react';
import Popover from '../PopOver';

export default function ChatInputIndex({handleSendMsg}) {
    const [message, setMessage] = useState('');

    const handleEmojiClick = (event, emoji) => {
        // console.log('event==>', event) 
        let msg = message;
        msg += event.emoji;
        setMessage(msg)
    }
    const handleChange = (event) => {
        setMessage(event.target.value);
        // Adjust the height of the textarea
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    const sendChat = (event) => {
        event.preventDefault();
        if (message.length > 0) {
          handleSendMsg(message);
          setMessage("");
        }
      };
      
    return (
        <div className="emoji-container">
            <form className="input-container" onSubmit={(e) => sendChat(e)}>
                <div className="input-outer-container">
                    <div className="emoji-button-container">
                        <Popover position={'top'} content={<EmojiPicker onEmojiClick={handleEmojiClick}/>}>
                            <div className="emoji">
                                <Icon width={'25px'} icon="fluent:emoji-add-20-filled" />
                            </div>
                        </Popover>
                    </div>
                    <textarea
                        value={message}
                        onChange={handleChange}
                        placeholder="Type your message here"
                        className="message-input"
                    />
                </div>

                <button className="submit" onSubmit={(e) => sendChat(e)}>
                    <Icon width={'25px'} icon="bxs:send" />
                </button>
            </form>
        </div>
    )
}
