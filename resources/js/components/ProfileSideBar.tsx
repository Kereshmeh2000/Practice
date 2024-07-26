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
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isTextModalOpen, setIsTextModalOpen] = useState(false);

    //Main Info modal

    //getting the user data from the User model
    // const [user, setUser] = useState<User[]>([]);

    // useEffect(() => {
    //   const fetchUsers = async () => {
    //     try {
    //       const userList = await User.all();
    //       setUser(userList);
    //     } catch (error) {
    //       console.error("Error fetching users:", error);
    //     }
    //   };

    //   fetchUsers();
    // }, []);

    return (
        <>
            <div className="hidden lg:block lg:w-1/4 sticky top-0">
                <div className="border border-slate-100 py-8 px-12 text-center">
                    {/* <div key={user.id}>
                        <img src={user.profileImage} className='rounded-full mb-5 mx-auto' />
                        <p>{user.name}</p>
                        <p>{user.location}</p>
                    </div> */}
                    <div>
                        <img src={avatar} />
                        <p>User Name</p>
                        <p>Isanbul</p>
                    </div>
                </div>

                {/* Photos */}
                <div
                    onClick={() => setIsPhotoModalOpen(true)}
                    className="border border-slate-100 p-5 flex items-center font-bold text-slate-500 cursor-pointer"
                >
                    <div className="mr-5 text-2xl">
                        <MdOutlinePhotoLibrary />
                    </div>
                    <p className="text-sm">Photos</p>
                    {isPhotoModalOpen && (
                        <Modal
                            showModal={isPhotoModalOpen}
                            closeModal={() => setIsPhotoModalOpen(false)}
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
                <div className="border border-slate-100 p-5 flex items-center font-bold text-slate-500 cursor-pointer">
                    <div className="mr-5 text-2xl">
                        <FaRegCircleUser />
                    </div>
                    <p className="text-sm">Main Info</p>
                </div>
                <div className="border border-slate-100 p-5 flex items-center font-bold text-slate-500 cursor-pointer">
                    <div className="mr-5 text-2xl">
                        <TiEdit />
                    </div>
                    <p className="text-sm">Profile Text</p>
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