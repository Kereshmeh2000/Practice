import React from "react";
import  ProfileSideBar  from "../../components/ProfileSideBar";
import { StoryDetails } from "./Components/Story/StoryDetails";
import PostFeed from "./Components/Post/PostFeed";


export default function Home() {
    return (
    <>
        <div className='px-3 md:px-20 '>
            <StoryDetails />
            <div className='flex my-3 flex-col lg:flex-row'>
                <ProfileSideBar />
                <div>
                    <PostFeed />
                </div>
            </div>
        </div>
    </>
 );
}