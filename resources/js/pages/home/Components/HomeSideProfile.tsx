import React from 'react';
import { MdOutlinePhotoLibrary } from "react-icons/md";


export default function HomeSideProfile () {
    return (
        <>
        <div className='border border-gray-200 py-8 px-12 text-center'>
            <img src="https://picsum.photos/101/101"  />
            <p>User name</p>
            <p>33, Divorced, İstanbul</p>
        </div>
        <div className='border border-gray-200 p-5 flex items-center'>
            <div>
                <MdOutlinePhotoLibrary />
            </div>
            <p>Photos</p>
        </div>
        </>
    )
}