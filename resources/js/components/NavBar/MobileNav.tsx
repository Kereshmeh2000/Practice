import React,{useState} from 'react';
import {MobileBottomMenu} from './constants';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


export default function MobileNav() {

    const [sideBar, setSideBar] = useState(false);
    const handleOpenSideBar = () => {
        setSideBar(true)
    }
    const handleCloseSideBar = () => {
        setSideBar(false)
    }

    return (
        <>
        <div>
            <nav className="lg:hidden flex items-center justify-between bg-pink-500 text-white px-4 font-bolder">
                <div className='text-white text-2xl flex py-4'>
                    LOGO
                </div>
                <div className='text-2xl' onClick={handleOpenSideBar}>
                    <RxHamburgerMenu />
                </div>
                {sideBar && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
                        <div className="absolute top-0 right-0 bg-white h-full w-64 shadow-lg">
                            <div className="flex justify-end p-4">
                                <button onClick={handleCloseSideBar} className='text-gray-400'>
                                    <RxCross2 />
                                </button>
                            </div>
                            <ul className="py-4">
                                <li className="px-4 py-2 text-gray-400">Home</li>
                                <li className="px-4 py-2 text-gray-400">Home</li>
                                <li className="px-4 py-2 text-gray-400">Home</li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>

            <div className="fixed bottom-0 w-full text-slate-400 lg:hidden bg-white border-t border-gray-200">
                <div className="flex justify-around py-2">
                    {MobileBottomMenu.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {item.icon}
                            <p className="text-xs">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}   