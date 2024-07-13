import { HiEnvelope } from "react-icons/hi2";
import { HiGift } from "react-icons/hi";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { IoMdExit } from "react-icons/io";


import React from 'react';

export const HeaderNotifs = [
    {icon: <HiEnvelope /> , count: 5, url: '/chat'},
    {icon: <IoNotifications /> , count: 12, url: '/'},
    {icon: <HiGift /> , count: 31, url: '/'},
    {icon: <FaEarthAmericas /> , count: 5, url: '/'},
]

export const HeaderProfile = [
    {icon: <LuUser2 /> , title: 'Profile', url: '/profile'},
    {icon: <IoSettingsOutline /> , title: 'Settings', url: '/settings'},
    {icon: <IoMdExit /> , title: 'Logout', url: '/logout'},
]
