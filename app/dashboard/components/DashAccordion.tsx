'use client'
import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import DashProgress from './DashProgress';

type Props = {
    title1: string,
    title2: string,
    title3: string,
    title4: string,
    title5: string,
    title6: string,
}


const AccordionDemo = ({ title1, title2, title3, title4, title5, title6 }: Props) => (
    <Accordion.Root
        className=" w-full rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
    >

        <AccordionItem value="item-1">
            <AccordionTrigger>{title1}</AccordionTrigger>
            <AccordionContent>
                <div className='flex flex-col gap-2 mb-10'>
                    <p>Progress:</p>
                    <DashProgress />
                    <div className='flex justify-end text-[8px] font-semibold'>
                        Last updated: 3:04pm
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='flex justify-between text-left'>
                        <p className='text-xs font-medium'>Date started:</p>
                        <p className='text-xs'>currentDate</p>
                    </div>
                    <div className='flex justify-between text-left'>
                        <p className='text-xs font-medium'>Projected finish:</p>
                        <p className='text-xs'>finishDate</p>
                    </div>
                    <div className='flex justify-between text-left'>
                        <p className='text-xs font-medium'>Date started:</p>
                        <p className='text-xs'>currentStep</p>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>{title2}</AccordionTrigger>
            <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>{title3}</AccordionTrigger>
            <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
            <AccordionTrigger>{title4}</AccordionTrigger>
            <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
            <AccordionTrigger>{title5}</AccordionTrigger>
            <AccordionContent>
                if maintenance member display:
                else display: sign up today button!
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
            <AccordionTrigger>{title6}</AccordionTrigger>
            <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
        </AccordionItem>

    </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
        className={classNames(
            ' mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 border-b-[1px]',
            className
        )}
        {...props}
        ref={forwardedRef}
    >
        {children}
    </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
        <Accordion.Trigger
            className={classNames(
                'text-slate10 shadow-mauve6 hover:bg-slate2 font-medium group flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none capitalize',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon
                className="text-red9 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
            />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={classNames(
            'text-slate10 bg-slate2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
            className
        )}
        {...props}
        ref={forwardedRef}
    >
        <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
));

export default AccordionDemo;

/**import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

type Props = {
    children: any,
    className: any,
    value: any
}

const DashAccordion = () => {
    const AccordionItem = React.forwardRef(({ children, className, ...props }: Props, forwardedRef) => (
        <Accordion.Item
            className={classNames(
                'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Accordion.Item>
    ));

    const AccordionTrigger = React.forwardRef(({ children, className, ...props }: Props, forwardedRef) => (
        <Accordion.Header className="flex">
            <Accordion.Trigger
                className={classNames(
                    'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon
                    className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden
                />
            </Accordion.Trigger>
        </Accordion.Header>
    ));

    const AccordionContent = React.forwardRef(({ children, className, ...props }: Props, forwardedRef) => (
        <Accordion.Content
            className={classNames(
                'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <div className="py-[15px] px-5">{children}</div>
        </Accordion.Content>
    ));


    return (
        <Accordion.Root
            className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
            type="single"
            defaultValue="item-1"
            collapsible
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's unstyled by default, giving you freedom over the look and feel.
                </Accordion.Content>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger>Can it be animated?</AccordionTrigger>
                <AccordionContent>
                    Yes! You can animate the Accordion with CSS or JavaScript.
                </AccordionContent>
            </AccordionItem>
        </Accordion.Root>
    )
};







export default DashAccordion;*/
