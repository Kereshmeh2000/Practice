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

    //Profile Text Modal
    const [profileTextModal, setProfileTextModal] = useState(false);
    const handleBioTextModalOpen = () => {
        setProfileTextModal(true);
    }
    const handleBioTextModalClose = () => {
        setProfileTextModal(false);
    }

    //text area limitation
    const [text, setText] = useState('');
    const maxLength = 500;

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <div className="hidden lg:block">
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
                    className="border border-slate-100 p-5 flex items-center font-bold text-slate-500"
                >
                    <div className="mr-5 text-2xl">
                        <MdOutlinePhotoLibrary />
                    </div>
                    <p className=" cursor-pointer text-sm">Photos</p>
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
                className="border border-slate-100 p-5 flex items-center font-bold text-slate-500">
                    <div className="mr-5 text-2xl">
                        <FaRegCircleUser />
                    </div>
                    <p className=" cursor-pointer text-sm">Main Info</p>
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
                className="border border-slate-100 p-5 flex items-center font-bold text-slate-500">
                    <div className="mr-5 text-2xl">
                        <TiEdit />
                    </div>
                    <p className=" cursor-pointer text-sm">Profile Text</p>
                    {profileTextModal && (
                        <Modal 
                        showModal={profileTextModal}
                        closeModal={handleBioTextModalClose}
                        title={'Profile Text'}
                        icon={<TiEdit />}
                        >
                            <div className='text-sm text-gray-500 font-normal'>
                                <textarea 
                                    className="w-full h-48 bg-slate-100 p-2"
                                    value={text} 
                                    maxLength={maxLength} 
                                    onChange={handleTextChange}
                                    placeholder='PROFILE TEXT'
                                ></textarea>
                                <p>{text.length}/{maxLength}</p>
                                <div className='mt-5 flex justify-end'>
                                    <button onClick={handleBioTextModalClose} className='py-2 px-4 m-1 border border-gray-300'>Cancle</button>
                                    <button className='py-2 px-4 m-1 border border-gray-300'>Save</button>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>


                <div className="border border-slate-100 p-5 flex items-center font-bold text-slate-500">
                    <div className="mr-5 text-2xl">
                        <FiArchive />
                    </div>
                    <p className=" cursor-pointer text-sm">My Archives</p>
                </div>
            </div>
        </>
    );
}