import React, {useState, useRef, useEffect} from 'react';
import { LuPencil } from 'react-icons/lu';
import { TiEdit } from 'react-icons/ti';
import { FaRegCircleUser } from 'react-icons/fa6';

export default function ProfileInformation() {
    const [activeBtn, setActiveBtn] = React.useState('mainInfo');

    const handleActiveBtn = (section) => {
        setActiveBtn(section);
    };

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
                <div className="text-lg text-gray-500 cursor-pointer">
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
                <div className="text-lg text-gray-500 cursor-pointer">
                    <LuPencil />
                </div>
            </div>
            <div className='border border-slate-100 grid grid-cols-3 text-sm text-gray-700'>
                <button onClick={() => handleActiveBtn('mainInfo')} className={`py-5 ${activeBtn === 'mainInfo' ? 'bg-gray-200' : 'bg-white'}`}>MAIN INFO</button>
                <button onClick={() => handleActiveBtn('personalInfo')} className={`py-5 ${activeBtn === 'personalInfo' ? 'bg-gray-200' : 'bg-white'}`}>PERSONAL INFORMATION</button>
                <button onClick={() => handleActiveBtn('yourFeature')} className={`py-4 ${activeBtn === 'yourFeature' ? 'bg-gray-200' : 'bg-white'}`}>PEER CANDIDATE YOUR FEATURES</button>
            </div>

            {/* main info section */}
            {activeBtn === 'mainInfo' && (
                <div className='h-72 overflow-y-auto mb-20 text-gray-700'>
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
                        <p>: 1994-10-15</p>
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
            )}

            {/* personal info section */}
            {activeBtn === 'personalInfo' && (
                <h2>Personal Information</h2>
            )}

            {/*PEER CANDIDATE YOUR FEATURES section */}
            {activeBtn === 'yourFeature' && (
                <h2>Your Features</h2>
            )}
        </>
    );
}
