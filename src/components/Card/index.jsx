import React, { useState } from 'react';
import './cardIndex.scss';

export default function Card({className, onClick, children}) {
    const [trigger, setTrigger] = useState(false);
    const [onHonver, setOnHover] = useState(false);
    const handleClick = () => {
        setTrigger(true);
        setTimeout(()=> {
            onClick()
        }, 500)
        
    }
    return (
        <>
            <div className={trigger ? `card ${className} pulsePing ` : `card ${className} ${onHonver ? 'card-hover' : ""}`}  onMouseEnter={()=> setOnHover(true)} onMouseLeave={()=> setOnHover(false)}  onClick={handleClick}>
                {children}
            </div>
        </>
    )
}
