import React from "react";
import { HomeStory } from "./Components/Story/HomeStory";
import { HomePost } from "./Components/Post/HomePost";
import  HomeSideProfile  from "./Components/HomeSideProfile";


export default function Home() {
    return (
    <>
        <div className='px-3 md:px-20 '>
            <HomeStory />
            <div className='flex my-3 flex-col lg:flex-row'>
                <HomeSideProfile />
                <HomePost />
            </div>
        </div>
    </>
 );
}