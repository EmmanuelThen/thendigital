'use client'
import React from 'react';
import * as Progress from '@radix-ui/react-progress';

const DashProgress = () => {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Progress.Root
            className="relative overflow-hidden bg-slate6 rounded-full w-full h-[15px]"
            style={{
                // Fix overflow clipping in Safari
                // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
                transform: 'translateZ(0)',
            }}
            value={progress}
        >
            <Progress.Indicator
                className="bg-red9 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </Progress.Root>
    );
};

export default DashProgress;
