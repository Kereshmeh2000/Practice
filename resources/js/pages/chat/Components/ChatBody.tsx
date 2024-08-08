import React from 'react';

export default function ChatBody({messages}) {
    return (
        <>
        {messages.map ((message) => (
            <div className={`bg-${message.isUser ? 'white' : 'gray-100'} p-4 rounded-lg shadow-md max-w-xs ${message.isUser ? 'ml-auto' : ''}`}>
                <p>{message.text}</p>
            </div>
        ))}
        </>
    );
}