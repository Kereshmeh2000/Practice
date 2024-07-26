import React, { useState, useEffect } from 'react';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { FaRegCircleUser } from 'react-icons/fa6';
import { TiEdit } from 'react-icons/ti';
import { FiArchive } from 'react-icons/fi';
import User from '../models/User';
import avatar from '../../../public/assets/images/avatar.png';
import Modal from '../pages/profile/components/Modal';
import { FaPlus } from 'react-icons/fa';

export default function ProfileSideBar() {

    //Photo Modal
    const [photoModal, setPhotoModal] = useState(false);
    const handlePhotoModalOpen = () => {
        setPhotoModal(true);
    }
    const handlePhotoModalClose = () => {
        setPhotoModal(false);
    }

    //Info Modal
    const [infoModal, setInfoModal] = useState(false);
    const handleInfoModalOpen = () => {
        setInfoModal(true);
    }
    const handleInfoModalClose = () => {
        setInfoModal(false);
    }

    //Bio Text Modal
    const [bioTextModal, setBioTextModal] = useState(false);
    const handleBioTextModalOpen = () => {
        setBioTextModal(true);
    }
    const handleBioTextModalClose = () => {
        setBioTextModal(false);
    }

    return (
        <>
            <div className="hidden lg:block lg:w-1/4 sticky top-0">
                <div className="border border-slate-100 py-8 px-12 text-center">
                    <div>
                        <img src={avatar} />
                        <p>User Name</p>
                        <p>Isanbul</p>
                    </div>
                </div>

                {/* Photos */}
                <div
                    onClick={handlePhotoModalOpen}
                    className="border border-slate-100 p-5 flex items-center font-bold text-slate-500 cursor-pointer"
                >
                    <div className="mr-5 text-2xl">
                        <MdOutlinePhotoLibrary />
                    </div>
                    <p className="text-sm">Photos</p>
                    {photoModal && (
                        <Modal
                            showModal={photoModal}
                            closeModal={handlePhotoModalClose}
                            title="Photos"
                            icon={<MdOutlinePhotoLibrary />}
                        >
                            <div>
                                <div className="border border-gray-200 p-12 m-5 max-w-max">
                                    <label htmlFor="file-upload" className="cursor-pointer">
                                        <div className="text-3xl text-gray-200">
                                            <FaPlus />
                                        </div>
                                        <input id="file-upload" type="file" className="hidden" />
                                    </label>
                                </div>
                            </div>
                            <p className="mt-10 text-xs">
                                - You can upload up to 20 photos. When you want to upload a new photo, you need to delete one of the old photos.
                            </p>
                            <p className="text-xs">
                                - The format of the photo you upload should be jpeg, jpg, gif, or png. The photo size cannot exceed 5 MB.
                            </p>
                        </Modal>
                    )}
                </div>

                {/* main Info */}

                <div 
                onClick={handleInfoModalOpen}
                className="border border-slate-100 p-5 flex items-center font-bold text-slate-500 cursor-pointer">
                    <div className="mr-5 text-2xl">
                        <FaRegCircleUser />
                    </div>
                    <p className="text-sm">Main Info</p>
                    {infoModal && (
                        <Modal 
                        showModal={infoModal}
                        closeModal={handleInfoModalClose}
                        title={'Main Info'}
                        icon={<FaRegCircleUser />}
                        >
                            this is a form 
                        </Modal>
                    )}
                </div>

                {/* Profile Text */}

                <div 
                onClick={handleBioTextModalOpen}
                className="border border-slate-100 p-5 flex items-center font-bold text-slate-500 cursor-pointer">
                    <div className="mr-5 text-2xl">
                        <TiEdit />
                    </div>
                    <p className="text-sm">Profile Text</p>
                    {bioTextModal && (
                        <Modal 
                        showModal={bioTextModal}
                        closeModal={handleBioTextModalClose}
                        title={'Profile Text'}
                        icon={<TiEdit />}
                        >
                            this is a form  for bio text
                        </Modal>
                    )}
                </div>


                <div className="border border-slate-100 p-5 flex items-center font-bold text-slate-500 cursor-pointer">
                    <div className="mr-5 text-2xl">
                        <FiArchive />
                    </div>
                    <p className="text-sm">My Archives</p>
                </div>
            </div>
        </>
    );
}