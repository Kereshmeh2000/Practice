import React, { useState, useEffect } from 'react';
import Chat from '../../../models/Chat';
export default function ChatBody() {
    const [chat, setChat] = useState<Chat[]>([]);
    useEffect(() => {
        const fetchChat = async () => {
            try {
                const chats = await Chat.all();
                setChat(chats);
            } catch (error) {
                console.error('Error fetching chat:', error);
            }
        };
        fetchChat();
    }, []);

    return (
        <>
        <div>
            <div>
                <div className={`bg-${chat.isUser ? 'white' : 'gray-100'} p-4 rounded-lg shadow-md max-w-xs ${chat.isUser ? 'ml-auto' : ''}`}>
                    <p>
                        {chat.conversations}
                    </p>
                </div>
            </div>
        </div>
            {/* {chat.conversations.map((conversation) => (
                <div key={chat.id}>
                    <div
                        className={`bg-${conversation.isUser ? 'white' : 'gray-100'} p-4 rounded-lg shadow-md max-w-xs ${conversation.isUser ? 'ml-auto' : ''}`}
                    >
                        {conversation.text}
                    </div>
                </div>
            ))} */}
        </>
    );
}
