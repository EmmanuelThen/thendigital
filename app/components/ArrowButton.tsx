import React from 'react';
import Link from 'next/link';

type Props = {
    buttonText: string,
    href: string
}

const ArrowButton = ({ buttonText, href }: Props) => {
    return (
        <button type='button'>
            <Link href={`${href}`} className='arrow bg-slate4 hover:bg-slate8 rounded-full px-2 py-[3px] flex items-center w-fit opacity-60 hover:opacity-100'>
                <div className='text-sm font-medium'>{buttonText}</div>
                <span>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                        </path>
                    </svg>
                </span>
            </Link>
        </button>
    )
}

export default ArrowButton