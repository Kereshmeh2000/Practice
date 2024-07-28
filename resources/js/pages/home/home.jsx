import React from "react";
import { HomeStory } from "./Components/Story/HomeStory";
import { PostDetails } from "./Components/Post/PostDetails";
import  ProfileSideBar  from "../../components/ProfileSideBar";


export default function Home() {
    return (
    <>
        <div className='px-3 md:px-20 '>
            <HomeStory />
            <div className='flex my-3 flex-col lg:flex-row'>
                <ProfileSideBar />
                <PostDetails />
            </div>
        </div>
    </>
 );
}