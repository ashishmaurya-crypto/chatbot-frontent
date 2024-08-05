import React, { useState, useRef, useEffect } from 'react';
import './Popover.scss';

export default function Popover({ children, content, position }) {
    const [visible, setVisible] = useState(false);
    // const [position, setPosition] = useState('bottom');
    const popoverRef = useRef(null);
    const triggerRef = useRef(null);

    const togglePopover = (event) => {
        event.preventDefault(); // Prevent the default action
        setVisible(!visible);
    };

    // const togglePopover = (event) => {
    //     event.preventDefault(); // Prevent the default action
    //     if (!visible) {
    //         setPopoverPosition();
    //     }
    //     setVisible(!visible);
    // };

    // Close the popover if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target) && !triggerRef.current.contains(event.target)) {
                setVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Adjust the position of the popover based on its visibility and the position of the trigger
    //   useEffect(() => {
    //     if (visible) {
    //       const triggerRect = triggerRef.current.getBoundingClientRect();
    //       const popoverRect = popoverRef.current.getBoundingClientRect();

    //       console.log('triggerRect', triggerRect.bottom , window.innerHeight)

    //       if (triggerRect.bottom + popoverRect.height > window.innerHeight) {
    //         setPosition('top');
    //       } else {
    //         setPosition('bottom');
    //       }
    //     }
    //   }, [visible]);

    return (
        <div className="popover-container" ref={triggerRef}>
            <div className="popover-trigger" onClick={togglePopover}>
                {children}
            </div>
            {visible && (
                <div className={`popover-content ${position}`} ref={popoverRef}>
                    <div className={`popover-arrow ${position}`}></div>
                    {content}
                </div>
            )}
        </div>
    );
}
