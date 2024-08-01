import React from "react";
import { StoryDetails } from "./Components/Story/StoryDetails";
import PostDetails from "./Components/Post/PostDetails";
import  ProfileSideBar  from "../../components/ProfileSideBar";


export default function Home() {
    return (
    <>
        <div className='px-3 md:px-20 '>
            <StoryDetails />
            <div className='flex my-3 flex-col lg:flex-row'>
                <ProfileSideBar />
                <PostDetails />
            </div>
        </div>
    </>
 );
}