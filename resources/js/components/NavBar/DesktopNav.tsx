import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { HeaderNotifs, HeaderProfile } from './constract';
import LoginForm from '../LoginForm/LoginForm';
import { RxCross2 } from "react-icons/rx";



export default function DesktopNav() {
    
    const [showLoginForm, setShowLoginForm] = useState(false);
    const handleLoginClick = () => {
        setShowLoginForm(true);
    }

    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    }

    return (
        <nav className="hidden lg:flex items-center justify-around bg-pink-500 text-white px-10 font-bolder">
            <div className='text-white text-4xl flex py-4'>LOGO</div>
            <div className='border-r border-l border-pink-400 py-4 px-5 flex ml-20'>ONLINE: 1254</div>
            <div className='flex'>
                <Link to='/' className='mx-5 py-4'>HOME</Link>
                <Link to='/search' className='ml-5 py-4'>SEARCH FOR CO-CANDIDATES </Link> 
                <div className="text-2xl font-bolder ml-2 mr-5 py-4"><IoSearchOutline /></div>
            </div>

            {/* PROFILE */}
                <div className='relative group'>
                    <div className='flex items-center border-r border-l border-pink-400 px-5 hover:cursor-pointer'>
                        <div className='rounded-full bg-white text-black p-4'>img</div>
                        <p className='px-2'>USER NAME</p>
                        <FaChevronDown />
                    </div>

                    {/* DROPDOWN */}
                    <div className='absolute hidden group-hover:block top-18 w-full bg-pink-500 rounded'>
                        {HeaderProfile.map((item) => (
                            <Link to={item.url}>
                                <div className='flex items-center justify-around p-5 border-t border-pink-400'>
                                    {item.icon}
                                    {item.title}
                                </div>
                            </Link>
                    ))}
                    </div>
                </div> 

            {/* NOTIFICATION */}
                <div className='flex items-center px-5'>
                    {HeaderNotifs.map((notif, index) => (
                        <div key={index} className='px-2'>
                            <Link to={notif.url} className='flex items-center relative'>
                                <div className='text-2xl font-bolder'>{notif.icon}</div>
                            </Link>
                            <span className='absolute rounded-full top-2 bg-pink-900 text-xs px-1 '>{notif.count}</span>
                        </div>
                    ))}
                </div>


                <button onClick={handleLoginClick} className='text-black px-4 py-2 bg-white rounded'>Signup</button>

                {showLoginForm && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                            <div className='relative'>
                            <div className="bg-white p-8 rounded-lg ">
                                <div className='absolute text-gray-300 top-0 left-0 cursor-pointer' onClick={handleCloseLoginForm}><RxCross2 /></div>
                                <LoginForm />
                            </div>
                            </div>
                        </div>
                )}
            
        </nav>
    );
}