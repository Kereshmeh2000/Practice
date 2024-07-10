import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile";
import LoginForm from "./pages/login-form/login-form";

export default function routes() {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}