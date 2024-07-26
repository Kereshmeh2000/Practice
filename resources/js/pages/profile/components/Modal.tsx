import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface Modal{
    showModal?: boolean;
    closeModal: () => void;
    title: String;
    children?: React.ReactNode;
    icon: React.ReactNode;
}

export default function Modal({showModal, closeModal, title, children, icon}: Modal) {    
    if (!showModal) {
        return null;
    }
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50" onClick={closeModal}>
            <div className="bg-white rounded-lg w-1/2" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="mr-5 text-2xl">
                            {icon}
                        </div>
                        <p className="">{title}</p>
                    </div>
                    <button className="text-2xl cursor-pointer" onClick={closeModal}>
                        <RxCross2 />
                    </button>
                </div>
                <div className='p-4'>
                    {children}
                </div>
            </div>
        </div>
    );
}