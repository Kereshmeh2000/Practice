import React from 'react';
import User from '../../../models/User';
import { RiMenu2Fill } from "react-icons/ri";
import ChatUserList from './ChatUserList';
import Modal from '../../profile/components/Modal';


export default function ChatHeader() {
    const [users, setUsers] = React.useState<User[]>([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

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

    // USER LIST
    const [userList, setUserList] = React.useState(false);
    const handleUserList = () => {
        setUserList(!userList);
    }

    return (
        <>
            <div className="fixed top-13 w-full">
                <div
                    // key={users[0].id}
                    className="border border-slate-200 bg-white p-3 flex items-center justify-between"
                >
                    <div>
                        <div>
                            <RiMenu2Fill onClick={handleOpen}/>
                            {/* <img src={users[0].image} className="rounded-full w-10 h-10 mr-3" /> */}
                        </div>
                        <div>
                            {/* <p className="px-2">{users[0].name}</p>
                            <p className="text-sm text-gray-500">last seen at {users[0].lastSeen}</p> */}
                        </div>
                    </div>
                    <div>icon</div>
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
