import React, { useState, useEffect } from 'react';
import Chat from '../../../models/Chat';

export default function ChatBody({ selectedUser }) {
    const [chat, setChat] = useState<Chat | null>(null);

    useEffect(() => {
        if (selectedUser) {
            const fetchChat = async () => {
                try {
                    const chats = await Chat.all();
                    const userChat = chats.find(c => c.user.id === selectedUser.id);
                    setChat(userChat || null);
                } catch (error) {
                    console.error('Error fetching chat:', error);
                }
            };
            fetchChat();
        }
    }, [selectedUser]);

    if (!chat) {
        return  <div className="flex items-center justify-center h-full w-full">
                    <p className="text-2xl">Select a user to view chat</p>
                </div>
    }

    return (
        <div>
            <div>
                <div className={`bg-${chat.isUser ? 'white' : 'gray-100'} mt-20 mx-5 p-4 rounded-lg shadow-md max-w-xs ${chat.isUser ? 'ml-auto' : ''}`}>
                    <p>{chat.conversations}</p>
                </div>
            </div>
        </div>
    );
}
