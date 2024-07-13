import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile";
import Home from "./pages/home/home";
import Search from "./pages/search/search";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}