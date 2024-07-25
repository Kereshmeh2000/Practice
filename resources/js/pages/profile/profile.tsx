import React from 'react'
import ProfileImage from './components/ProfileImage'
import ProfileSideBar from '../../components/ProfileSideBar'

export default function Profile() {
    return (
        <>
            <div className='px-3 md:px-20'>
                <div className='flex my-3 flex-col lg:flex-row'>
                    <ProfileSideBar />
                    <ProfileImage />
                </div>
            </div>
        </>
    )
}