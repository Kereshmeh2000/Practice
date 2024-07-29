import React, { useEffect, useRef } from 'react';

export default function useInfiniteScroll(callback) {
    const observer = useRef();

    useEffect(() => {
        const handleSection = (entries) => {
            if (entries[0].isIntersecting) { 
                callback();
            }
        };

        const options = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        };

        observer.current = new IntersectionObserver(handleSection, options);

        const target = document.querySelector('#scroll-anchor');
        if (target) {
            observer.current.observe(target);
        }

        return () => {
            if (target) {
                observer.current.unobserve(target);
            }
        };
    }, [callback]);

    return;
}
