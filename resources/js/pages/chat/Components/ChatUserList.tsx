import React, { useState, useEffect } from 'react';
import Messages from '../../../models/Messages';

export default function ChatUserList({ onSelectUser }) {
    const [userChat, setUserChat] = useState<Messages[]>([]);
    
    useEffect(() => {
        const fetchUserChat = async () => {
            try {
                const users = await Messages.all();
                setUserChat(users);
            } catch (error) {
                console.error('Error fetching user Messages:', error);
            }
        };
        fetchUserChat();
    }, []);

    return (
        <>
            {userChat.map((message) => (
                <div
                    key={message.receiver.id}
                    className="border border-slate-200 p-3 flex items-center hover:bg-slate-50 cursor-pointer"
                    onClick={() => onSelectUser(message.receiver.user)}
                >
                    <div className="flex items-center">
                        <img src={message.receiver.user.image} className="rounded-full w-10 h-10 mr-3" alt="User" />
                        <p className="px-2">{message.receiver.user.name}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
