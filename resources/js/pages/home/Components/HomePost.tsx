import React from 'react';
import { FaGift } from "react-icons/fa";
import HomeSideProfile from './HomeSideProfile';

export const HomePost = () => {
    return (
        <>
            <div className="my-3 flex flex-col lg:flex-row">
            <div className="hidden lg:block lg:w-1/4 bg-gray-100 p-3 border border-gray-200">
                <HomeSideProfile />
            </div>
                {/* Post header  */} 
                <div className='lg:w-3/4'>
                <div className="bg-gray-100 border border-gray-200 p-3 flex items-center w-full">
                    <img
                        src="https://picsum.photos/101/101"
                        className="rounded-full w-10 h-10 mr-3"
                    />
                    <div className="flex flex-col text-sm leading-3 w-full">
                        <div className="flex space-x-2">
                            <span>user name</span>
                            <span></span>
                        </div>
                        <div className="flex space-x-2 mt-1 justify-between w-full">
                            <span>Istanbul</span>
                            <span>Today 9:30</span>
                        </div>
                    </div>
                </div>
                {/* Post body */}
                <div className="bg-gray-100 border border-gray-200 pt-3">
                    <img src="https://picsum.photos/101/101" className="w-full" />
                    <div className="mt-5 flex">
                        <div className="py-1 px-3 border border-gray-200">
                            <FaGift />
                        </div>
                   </div>
               </div>
           </div>
           </div>
        </>
    )
}