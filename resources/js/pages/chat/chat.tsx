import React from 'react';
import User from '../../models/User';

export default function Chat() {
    const [users, setUsers] = React.useState<User[]>([]);

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await User.all();
                setUsers(userList);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <>
            <div className="md:grid md:grid-cols-3 h-screen">
                <div className=" md:col-span-1 overflow-y-auto">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="border border-slate-200 p-3 flex items-center justify-between hover:bg-slate-50 cursor-pointer"
                        >
                            <div className="flex items-center">
                                <img src={user.image} className="rounded-full w-10 h-10 mr-3" />
                                <p className="px-2">{user.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">{user.lastSeen}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:col-span-2 overflow-y-auto bg-gradient-to-r from-blue-100 to-green-100 to-pink-100 h-full">
                    {/* CHAT HEADER */}
                    <div className='fixed top-13 w-full'>
                        <div
                            key={users[0].id}
                            className="border border-slate-200 bg-white p-3 flex items-center justify-between"
                        >
                            <div className="flex items-center">
                                <div>
                                    <img src={users[0].image} className="rounded-full w-10 h-10 mr-3" />
                                </div>
                                <div>
                                    <p className="px-2">{users[0].name}</p>
                                    <p className="text-sm text-gray-500">last seen at {users[0].lastSeen}</p>
                                </div>
                            </div>
                            <div>
                                icon
                            </div>
                        </div>
                    </div>
                    {/* CHAT BODY */}
                    <div className="flex-1 p-4 space-y-4 text-gray-800 overflow-y-auto">
                        <div className="bg-white p-4 rounded-lg shadow-md max-w-xs ml-auto">
                            <p>Hi! How are you?</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs">
                            <p>I'm good, thanks! How about you?</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md max-w-xs ml-auto">
                            <p>I'm great, thank you!</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md max-w-xs">
                            <p>Hi! How are you?</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs">
                            <p>I'm good, thanks! How about you?</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md max-w-xs ml-auto">
                            <p>I'm great, thank you!</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md max-w-xs ml-auto">
                            <p>
                                Hi! How are you?Hi! How are you? Hi! How are you? Hi! How are you? Hi! How are you? Hi! How are you? Hi!
                                How are you?
                            </p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-xs">
                            <p>I'm good, thanks! How about you?</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md max-w-xs ml-auto">
                            <p>I'm great, thank you!</p>
                        </div>
                    </div>
                    {/* CHAT FOOTER */}
                    <div className="fixed bottom-0 w-full">
                        <div className="bg-white p-4 flex items-center">
                            <input
                                type="text"
                                className="w-full p-2 bg-gray-100 rounded-lg border border-gray-200"
                                placeholder="Type a message"
                            />
                            <button className="bg-blue-500 text-white p-2 rounded-lg ml-2">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
