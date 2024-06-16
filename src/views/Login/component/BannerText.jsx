import React from 'react';
import './BannerText.scss'

export default function BannerText() {
    return (
        <>
            <section className="header">
                <div className="title-wrapper">
                    <h1 className="sweet-title">
                        <span data-text="Chat Bubble">Chat Bubble</span>
                        <span data-text="App">App</span>
                    </h1>
                    <span className="top-title">Connect, Converse,</span>
                    <span className="top-title">and Create Memories with </span>
                    <span className="bottom-title">You can find </span>
                    <span className="bottom-title">Your Gateway to Global Conversations!” 😊</span>
                </div>
            </section>
        </>
    )
}
