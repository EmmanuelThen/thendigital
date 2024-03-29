'use client'
import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const TAGS = Array.from({ length: 10 }).map((_, i, a) => `Order.${a.length - i}`);

const ScrollingArea = () => (
    <ScrollArea.Root className="w-full h-[225px] rounded overflow-hidden">
        <ScrollArea.Viewport className="w-full h-full rounded">
            <div className="py-[15px] px-5 flex justify-center items-center flex-col">
                <div className="text-blue9 text-[15px] leading-[18px] font-medium">Recent Orders</div>
                {TAGS.map((tag) => (
                    <div
                        className="flex justify-center text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-slate2 w-full"
                        key={tag}
                    >
                        <p>{tag}</p>
                    </div>
                ))}
            </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="vertical"
        >
            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="horizontal"
        >
            <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="bg-blackA8" />
    </ScrollArea.Root>
);

export default ScrollingArea;
