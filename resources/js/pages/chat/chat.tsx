import React from 'react';
import User from '../../models/User';
import ChatFooter from './Components/ChatFooter';
import ChatBody from './Components/ChatBody';
import ChatHeader from './Components/ChatHeader';
import ChatUserList from './Components/ChatUserList';

export default function Chat() {
    return (
        <>
            <div className="md:grid md:grid-cols-3 h-screen">
                <div className="hidden md:block md:col-span-1 overflow-y-auto">
                    <ChatUserList />
                </div>
                <div className="md:col-span-2 overflow-y-auto bg-gradient-to-r from-blue-100 to-green-100 to-pink-100 h-full">
                    <ChatHeader />
                    <ChatBody />
                    <ChatFooter />
                </div>
            </div>
        </>
    );
}
