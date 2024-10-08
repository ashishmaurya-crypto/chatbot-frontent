import React from 'react';
import './Dashboard.scss';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import HoverCard from '../../components/HoverCard';

export default function DashboardIndex() {
    const navigate = useNavigate()
    return (
        <>
            <div className='dashboard-container'>
                <div className='heading-container'>
                    <h1>Bubble Apps</h1>
                </div>
                <div className='dashboard-card-container'>
                    <Card className={'item-card'} onClick={() => navigate("/chat/login")}>
                        <div className='logo'>
                            <ChatBoxSvg />
                        </div>
                        <div className='title'>ChatBox</div>
                    </Card>
                    <Card className={'item-card'} onClick={() => navigate("/chat/login")}>
                        <div className='logo'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6em"
                                height="6em"
                                viewBox="0 0 24 24">
                                <path fill="#6e1e8a" d="M17.3 18.609a1.7 1.7 0 0 0-1 1.055c-.413 1.353 1.286 2.409 2.581 1.6c.365-.221.365-.413 0-.634c-.24-.143-.269-.143-.451.02a.816.816 0 1 1 0-1.229c.182.163.2.163.442-.077c.3-.3.24-.422-.3-.662a1.712 1.712 0 0 0-1.272-.073m-2.042 1.429v1.536h.767V18.5h-.767zm-1.795-1.401a.8.8 0 0 0-.509.768c0 .422.115.557.739.835c.461.211.614.317.586.441c-.039.221-.48.279-.864.116c-.269-.106-.307-.1-.47.115c-.163.215-.164.24-.02.355a2.079 2.079 0 0 0 1.258.259c.412-.077.883-.528.883-.845a1.226 1.226 0 0 0-.864-.93c-.49-.164-.634-.317-.432-.48a.7.7 0 0 1 .518-.058c.327.048.394.029.528-.182s.144-.24-.038-.336a1.883 1.883 0 0 0-1.315-.058m-3.772.845c0 1.526.365 2.044 1.44 2.044s1.439-.518 1.439-2.044V18.5h-.748l-.039.95c-.028 1.056-.172 1.353-.652 1.353c-.528 0-.624-.173-.653-1.286L10.44 18.5h-.749Zm-4.213-.816c-.614.326-.729.586-.758 1.814l-.038 1.094h.787v-.941c0-1.1.115-1.362.614-1.362c.537 0 .633.211.633 1.324v.979h.768v-.988c0-1.123.1-1.315.652-1.315c.48 0 .6.268.6 1.362v.941H9.5v-.988c0-1.095-.134-1.488-.6-1.834a1.375 1.375 0 0 0-1.478.02l-.317.22l-.288-.2a1.3 1.3 0 0 0-1.339-.126m7.687-16.19A11.619 11.619 0 0 0 4.739 8.57A6.232 6.232 0 0 0 4 11.593a4.556 4.556 0 0 0 1.507 3.6a5.234 5.234 0 0 0 4.184 1.467a5.923 5.923 0 0 0 2.9-.767l.547-.288l.681.489a6.814 6.814 0 0 0 .931.595a.954.954 0 0 0 1.15-1.324a3.935 3.935 0 0 0-.711-.643a3.483 3.483 0 0 1-.6-.5a4.941 4.941 0 0 1 .336-.6a3.322 3.322 0 0 0 .537-2.332a2.559 2.559 0 0 0-4.376-1.4a2.419 2.419 0 0 0-.749 1.958a3.49 3.49 0 0 0 .845 1.968a2.329 2.329 0 0 1 .336.47a2.9 2.9 0 0 1-.691.288a4.1 4.1 0 0 1-2.978-.074a3.415 3.415 0 0 1-1.67-1.593a4.289 4.289 0 0 1-.079-2.571a8.687 8.687 0 0 1 2.42-3.618C12 3.733 16.409 3.484 17.724 6.2a3.124 3.124 0 0 1 .3 1.535a3.846 3.846 0 0 1-.23 1.823a6.379 6.379 0 0 1-.825 1.661c-.6.892-.682 1.247-.4 1.67a.921.921 0 0 0 1.046.326c.662-.182 1.727-1.9 2.169-3.493a6.891 6.891 0 0 0-.045-3.622a5.835 5.835 0 0 0-.547-1.229a5.654 5.654 0 0 0-3.2-2.246a8.925 8.925 0 0 0-2.827-.149m.173 8.733c.288.288.25.749-.1 1.277a1.466 1.466 0 0 1-.375.451c-.173 0-.6-.72-.643-1.094a.628.628 0 0 1 .163-.615a.682.682 0 0 1 .955-.019" />
                            </svg>
                        </div>
                        <div className='title'>Music</div>
                    </Card>
                </div>
            </div>
        </>
    )
}


export const ChatBoxSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="6em" height="6em" viewBox="0 0 24 24">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="30%" style={{ stopColor: '#6e1e8a', stopOpacity: 1 }} />
                <stop offset="72%" style={{ stopColor: '#6e1e8a', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#6e1e8a', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <g fill="none" stroke="url(#grad1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M13.584 7a5.001 5.001 0 1 0-8.809 4.675L4 14l2.325-.775c.214.136.44.256.675.359" />
            <path fill="#fff" d="M15 20a5 5 0 1 1 4.225-2.325L20 20l-2.325-.775A4.976 4.976 0 0 1 15 20" />
        </g>
    </svg>
);

