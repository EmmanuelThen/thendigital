import React from 'react'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import DashProgress from './DashProgress'

type Props = {
    cardTitle: any,
    mainSection: any,
    bgColor: any
}

const DashCards = ({ cardTitle, mainSection, bgColor }: Props) => {
    return (
        <div id='back-ground' className={`${bgColor} flex flex-col justify-between p-5 rounded-lg shadow-blackA9 shadow-[0_4px_7px] w-[400px] h-[325px]`}>
            <div className='flex justify-between capitalize'>
                <div className='flex items-center'>
                    <div className='uppercase font-medium tracking-[3px] text-gray-500'>{cardTitle}</div>
                </div>
                {/*<button
                    className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-slate2"
                    aria-label="Customise options"
                >
                    <ExternalLinkIcon />
    </button>*/}
            </div>

            <div id='mainSection' className='flex justify-center items-center p-5'>
                {mainSection}
            </div>
        </div>
    )
}

export default DashCards