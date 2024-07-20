import React from 'react';
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiEdit } from "react-icons/ti";
import { FiArchive } from "react-icons/fi";



export default function HomeSideProfile () {
    return (
        <>
            <div className='hidden lg:block lg:w-1/4'>
            <div className='border border-slate-100 py-8 px-12 text-center'>
            <img src="https://picsum.photos/101/101" className='rounded-full mb-5 mx-auto' />
            <p>User name</p>
            <p>33, Divorced, İstanbul</p>
        </div>
        <div className='border border-slate-100 p-5 flex items-center font-bold	text-slate-500'>
            <div className='mr-5 text-2xl'>
                <MdOutlinePhotoLibrary />
            </div>
            <p className='text-sm'>Photos</p>
        </div>
        <div className='border border-slate-100 p-5 flex items-center font-bold	text-slate-500'>
            <div className='mr-5 text-2xl'>
                <FaRegCircleUser />
            </div>
            <p className='text-sm'>Main Info</p>
        </div>
        <div className='border border-slate-100 p-5 flex items-center font-bold	text-slate-500'>
            <div className='mr-5 text-2xl'>
                <TiEdit />
            </div>
            <p className='text-sm'>Profile Text</p>
        </div>
        <div className='border border-slate-100 p-5 flex items-center font-bold	text-slate-500'>
            <div className='mr-5 text-2xl'>
                <FiArchive />
            </div>
            <p className='text-sm'>My Archives</p>
        </div>
            </div>
        
        </>
    )
}