import React from "react";
import { HomeStory } from "./Components/HomeStory";
import { HomePost } from "./Components/HomePost";
import './home.css';


export default function Home() {
    return (
    <>
        <HomeStory />
        <HomePost />
    </>
 );
}