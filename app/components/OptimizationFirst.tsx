'use client'
import React, { useEffect, useRef } from 'react';
import observer from '@/intersectionObserver';
import { hiddenElements } from '@/intersectionObserver';


type Props = {}

const OptimizationFirst = (props: Props) => {
    const hiddenElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        hiddenElementsRef.current = document.querySelectorAll('.hiddenElement');

        if (hiddenElementsRef.current && observerRef.current) {
            hiddenElementsRef.current.forEach((e) => observerRef.current!.observe(e));
        }

        // Clean-up function
        return () => {
            if (hiddenElementsRef.current && observerRef.current) {
                hiddenElementsRef.current.forEach((e) => observerRef.current!.unobserve(e));
            }
        };
    }, []);


    return (
        <div>
            <div className='logo hiddenElement'>
                <h1 className=''>Optimization comes first.</h1>
                <p>
                    Web development principles are essential for ensuring that a website is functional, useable, secure, and meets the needs of its intended audience.
                    Here at ThenDigital, we promise to follow these web development principles to ensure that we create the best-optimized websites for our clients
                </p>
            </div>
            <div>
            </div>
        </div>
    )
}

export default OptimizationFirst