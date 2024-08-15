import React from 'react';
import User from '../../../models/User';
import ChatUserList from './ChatUserList';
import Modal from '../../profile/components/Modal';
import { BsThreeDotsVertical } from "react-icons/bs";



export default function ChatHeader({userChat, setUserChat}) {


    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await User.all();
                setUserChat(userList);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    // USER LIST
    const [userList, setUserList] = React.useState(false);
    const handleUserList = () => {
        setUserList(!userList);
    }

    return (
        <>
            <div className="fixed top-13 w-screen">
                <div
                    // key={users[0].id}
                    className="border border-slate-200 bg-white p-3 flex items-center justify-between"
                >
                        <div className='flex items-center'>
                            {/* <img src={users[0].image} className="rounded-full w-10 h-10 mr-3" />
                            <p className="px-2">{users[0].name}</p> */}
                        </div>
                        <div>
                            {/* <p className="text-sm text-gray-500">last seen at {users[0].lastSeen}</p> */}
                        </div>
                    <div>
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>
            {userList && (
                <Modal 
                closeModal={handleUserList}
                
                >
                <div className={`w-full bg-white fixed top-0 left-0 h-full transition-transform duration-300 z-50 ${userList ? 'animate-slide-in-left' : 'animate-slide-out-left'}`}>
                    <ChatUserList />
                </div>
                </Modal>
            )}
        </>
    );
}
