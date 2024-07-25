import React,{useState , useEffect} from 'react';
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiEdit } from "react-icons/ti";
import { FiArchive } from "react-icons/fi";
import User from '../models/User';
import avatar from '../../../public/assets/images/avatar.png';
import Modal from '../pages/profile/components/Modal';



export default function ProfileSideBar () {

    //modal
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

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
            <div className='hidden lg:block lg:w-1/4 sticky top-0'>
                <div className='border border-slate-100 py-8 px-12 text-center'>
                        {/* <div key={user.id}>
                            <img src={user.profileImage} className='rounded-full mb-5 mx-auto' />
                            <p>{user.name}</p>
                            <p>{user.location}</p>
                        </div> */}
                        <div>
                            <img src={avatar}  />
                            <p>User Name</p>
                            <p>Isanbul</p>
                        </div>
                </div>
                <div onClick={handleModal} className='border border-slate-100 p-5 flex items-center font-bold	text-slate-500 cursor-pointer'>
                    <div className='mr-5 text-2xl'>
                        <MdOutlinePhotoLibrary />
                    </div>
                    <p className='text-sm'>Photos</p>
                    {showModal && <Modal />}
                </div>
                <div className='border border-slate-100 p-5 flex items-center font-bold	text-slate-500 cursor-pointer'>
                    <div className='mr-5 text-2xl'>
                        <FaRegCircleUser />
                    </div>
                    <p className='text-sm'>Main Info</p>
                </div>
                <div className='border border-slate-100 p-5 flex items-center font-bold	text-slate-500 cursor-pointer'>
                    <div className='mr-5 text-2xl'>
                        <TiEdit />
                    </div>
                    <p className='text-sm'>Profile Text</p>
                </div>
                <div className='border border-slate-100 p-5 flex items-center font-bold	text-slate-500 cursor-pointer'>
                    <div className='mr-5 text-2xl'>
                        <FiArchive />
                    </div>
                    <p className='text-sm'>My Archives</p>
                </div>
            </div>
        </>
    )
}