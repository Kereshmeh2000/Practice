import React from 'react';
import User from '../../../models/User';


export default function ChatUserList({open, setOpen}) {
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
            <div onClick={setOpen}>X</div>
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
        </>
    );
}