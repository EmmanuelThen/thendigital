import React from 'react'

type Props = {
    points: any
}

const FeatureBulletPoint = ({ points }: Props) => {
    return (
        <div className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="w-[15px] h-[15]">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(358, 75%, 59%)" />
                        <stop offset="25%" stopColor="purple" />
                        <stop offset="50%" stopColor="pink" />
                        <stop offset="75%" stopColor="rgb(64, 64, 234)" />
                        <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                </defs>
                <path strokeLinecap="round" strokeLinejoin="round" stroke="url(#gradient)" strokeWidth="1.2" fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            <div className='text-slate10 font-light text-[12px]'>{points}</div>
        </div>
    )
}

export default FeatureBulletPoint