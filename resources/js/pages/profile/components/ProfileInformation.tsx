import React from 'react';
import { LuPencil } from "react-icons/lu";
import { TiEdit } from 'react-icons/ti';
import { FaRegCircleUser } from 'react-icons/fa6';


export default function ProfileInformation() {

    return (
        <>
            
            {/* PROFILE TEXT */}
            <div className='border border-slate-100 p-5 flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className="mr-5 text-lg text-gray-500">
                        <TiEdit />
                    </div>
                    <p className="">Profile Text</p>
                </div>
                <div 
                className="text-lg text-gray-500 cursor-pointer">
                    <LuPencil />
                </div>
            </div>
            <div className='border border-slate-100 p-5'>
                <p className='my-1'>Don't write an approved profile yet</p>
                <p className='my-1'>Type of profile is waiting for approval</p>
            </div>
            
            {/* MAIN INFO */}
            <div className='mt-5 border border-slate-100 p-5 flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className="mr-5 text-lg text-gray-500">
                        <FaRegCircleUser />
                    </div>
                    <p className="">MAIN INFO</p>
                </div>
                <div 
                className="text-lg text-gray-500 cursor-pointer">
                    <LuPencil />
                </div>
            </div>
            <div className='border border-slate-100 flex items-center justify-around'>
                <button className='py-4'>MAIN INFO</button>
                <button className='py-4'>PERSONAL INFORMATION</button>
                <button className='py-4'>PEER CANDIDATE YOUR FEATURES</button>
            </div>
            <div className='h-72 overflow-y-auto mb-20'>
                <div className='border border-slate-100 flex items-center p-4'>
                    <p>Nick</p>
                    <p>: manam</p>
                </div>
                <div className='border border-slate-100 flex items-center p-4'>
                    <p>E-Mail</p>
                    <p>: kkkkkkkkk@gmail.com</p>
                </div>
                <div className='border border-slate-100 flex items-center p-4'>
                    <p>Gender</p>
                    <p>: Male</p>
                </div>
                <div className='border border-slate-100 flex items-center p-4'>
                    <p>Marital Status</p>
                    <p>: Divorced</p>
                </div>
                <div className='border border-slate-100 flex items-center p-4'>
                    <p>Date Of Birth</p>
                    <p>:  1994-10-15</p>
                </div>
                <div className='border border-slate-100 flex items-center p-4'>
                    <p>The Country Where You Live</p>
                    <p>: Turkey</p>
                </div>
                <div className='border border-slate-100 flex items-center p-4'>
                    <p>The City Where You Live</p>
                    <p>: Istanbul</p>
                </div>
                <div className='border border-slate-100 flex items-center p-4'>
                    <p>Horoscope</p>
                    <p>: Libra</p>
                </div>
            </div>
        </>
);}