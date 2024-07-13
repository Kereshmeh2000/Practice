import React from 'react';
import MobileNav from './MobileNav.tsx';
import DesktopNav from './DesktopNav.tsx';

export default function NavBar() {
    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    );
}   