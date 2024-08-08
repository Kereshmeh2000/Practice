import React, { useEffect } from 'react';

export default function useInfiniteScroll(callback) {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const documentHeight = document.documentElement.offsetHeight;
            if (scrollPosition >= documentHeight) {
                callback();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback]);

    return;
}
