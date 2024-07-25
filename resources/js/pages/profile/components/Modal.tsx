import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { FaPlus } from "react-icons/fa6";


export default function Modal() {
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg w-1/2">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="mr-5 text-2xl">
                            <MdOutlinePhotoLibrary />
                        </div>
                        <p className="">Photos Edit</p>
                    </div>
                    <button className="text-2xl cursor-pointer" onClick={handleCloseModal}>
                        <RxCross2 />
                    </button>
                </div>
                <div className='p-4'>
                    <div>
                        <div className='border border-gray-200 p-12 m-5 max-w-max'>
                            <FaPlus />
                        </div>
                    </div>
                    <p className="mt-10 text-xs">
                        - You can upload up to 20 photos. When you want to upload a new photo, you need to delete one of the old photos.
                    </p>
                    <p className="text-xs">
                        - The format of the photo you upload should be jpeg, jpg, gif, or png. The photo size cannot exceed 5 MB.
                    </p>
                </div>
            </div>
        </div>
    );
}