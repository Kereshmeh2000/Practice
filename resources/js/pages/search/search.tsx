import React, {useState, useEffect} from 'react';
import { FaStar, FaHeart } from "react-icons/fa";
import { HiGift } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { MdAddReaction, MdNotInterested } from "react-icons/md";
import User from '../../models/User';
import DetailedSearch from './Components/DetailedSearch';

export default function Search() {
    // Tabs
    const [activeTab, setActiveTab] = useState('ONLINE MEMBERS');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    // Getting Users Data
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userList = await User.all();
                setUsers(userList);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <>
            <div className='px-3 md:px-20'>
                <div className=' mt-5 border border-slate-200 grid grid-cols-7 text-sm text-gray-700 [&>*]:py-2'>
                    <button onClick={() => handleTabChange('DETAILED SEARCH')} className={`${activeTab === 'DETAILED SEARCH' ? 'bg-gray-100' : 'bg-white'}`}>DETAILED SEARCH</button>
                    <button onClick={() => handleTabChange('ONLINE MEMBERS')} className={`${activeTab === 'ONLINE MEMBERS' ? 'bg-gray-100' : 'bg-white'}`}>ONLINE MEMBERS</button>
                    <button onClick={() => handleTabChange('TO LOCATION')} className={`${activeTab === 'TO LOCATION' ? 'bg-gray-100' : 'bg-white'}`}>TO LOCATION</button>
                    <button onClick={() => handleTabChange('NEW MEMBERS')} className={`${activeTab === 'NEW MEMBERS' ? 'bg-gray-100' : 'bg-white'}`}>NEW MEMBERS</button>
                    <button onClick={() => handleTabChange('APPROVED MEMBERS')} className={`${activeTab === 'APPROVED MEMBERS' ? 'bg-gray-100' : 'bg-white'}`}>APPROVED MEMBERS</button>
                    <button onClick={() => handleTabChange('NEW PHOTOS')} className={`${activeTab === 'NEW PHOTOS' ? 'bg-gray-100' : 'bg-white'}`}>NEW PHOTOS</button>
                    <button onClick={() => handleTabChange('BORN TODAY')} className={`${activeTab === 'BORN TODAY' ? 'bg-gray-100' : 'bg-white'}`}>BORN TODAY</button>
                </div>
                {activeTab === 'ONLINE MEMBERS' && (
                    <div className='lg:grid grid-cols-4 gap-4'>
                            {users.map (user => (
                                <div key={user.id} className='border border-slate-200 mt-5 '>
                                <img src={user.image} alt={user.name} className='w-full' />
                                <div className='border-t border-slate-200'>
                                    <div className='text-center text-gray-600'>
                                        <p className='font-bold pt-2'>{user.name}</p>
                                        <p>{user.location}</p>
                                        <p>online</p>
                                    </div>
                                    <div className='flex items-center justify-end [&>*]:p-2 text-gray-600'>
                                        <button><FaStar /></button>
                                        <button><FaHeart /></button>
                                        <button><HiGift /></button>
                                        <button><HiEnvelope /></button>
                                        <button><MdAddReaction /></button>
                                        <button><MdNotInterested /></button>
                                    </div>
                                </div>
                            </div>
                            ))}                            
                    </div>
                )}
                {activeTab === 'DETAILED SEARCH' && (
                    <DetailedSearch />
                )}
            </div>
        </>
    );
}