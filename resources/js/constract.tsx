import { HiEnvelope } from "react-icons/hi2";
import { HiGift } from "react-icons/hi";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";
import { FaEarthAmericas } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { IoMdExit } from "react-icons/io";
import { FaHome, FaSearch, FaHeart, FaUser } from 'react-icons/fa';


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

export const MobileBottomMenu = [
    {icon: <FaHome />, title: 'Home'},
    {icon: <FaSearch />, title: 'Search'},
    {icon: <HiEnvelope />, title: 'Message'},
    {icon: <IoNotifications />, title: 'Notification'},
    {icon: <FaUser />, title: 'Profile'},
]
