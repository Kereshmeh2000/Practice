import React, {useState, useEffect} from 'react';
import Chat from '../../../models/Chat';


export default function ChatUserList() {
    const [userChat, setUserChat] = useState<Chat[]>([]);
    useEffect(() => {
        const fetchUserChat = async () => {
            try {
                const users = await Chat.all();
                setUserChat(users);
            } catch (error) {
                console.error('Error fetching user chat:', error);
            }
        };
        fetchUserChat();
    }, []);

    return (
        <>
            {userChat.map((userChat) => (
                <div
                    key={userChat.id}
                    className="border border-slate-200 p-3 flex items-center hover:bg-slate-50 cursor-pointer"
                >
                    <div key={userChat.user.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img src={userChat.user.image} className="rounded-full w-10 h-10 mr-3" />
                            <p className="px-2">{userChat.user.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{userChat.lastSeen}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}