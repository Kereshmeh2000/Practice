import React from 'react'
import ProfileImage from './components/ProfileImage'
import ProfileSideBar from '../../components/ProfileSideBar'
import ProfileInformation from './components/ProfileInformation'

export default function Profile() {
    return (
        <>
            <div className='px-3 md:px-20'>
                <div className='grid grid-cols-4 gap-4 my-3'>
                    <ProfileSideBar className='col-span-1  p-4' />
                    <div className='col-span-3 p-4'>
                        <ProfileImage />
                        <ProfileInformation />
                    </div>
                </div>
            </div>
        </>
    )
}