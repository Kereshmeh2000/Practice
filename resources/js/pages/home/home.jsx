import React from "react";
import { HomeStory } from "./Components/Story/HomeStory";
import { HomePost } from "./Components/HomePost";


export default function Home() {
    return (
    <>
    <div className='px-3 md:px-20'>
        <HomeStory />
        <HomePost />
    </div>
    </>
 );
}