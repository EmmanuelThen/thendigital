'use client'
import React, { useEffect } from 'react';
import observer from '@/intersectionObserver';
import { hiddenElements } from '@/intersectionObserver';


type Props = {}

const OptimizationFirst = (props: Props) => {
    useEffect(() => {
        if (hiddenElements && observer) {
            hiddenElements.forEach((e) => observer.observe(e));
        };
        // Clean-up function
        return () => {
            if (hiddenElements && observer) {
                hiddenElements.forEach((e) => observer.unobserve(e));
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