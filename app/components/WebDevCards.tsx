import React from 'react';
import Link from 'next/link';

type Props = {}

const WebDevCards = (props: Props) => {
    return (
        <div className='flex justify-center items-center p-10'>
            <div className="cards">
                <Link href='/static' className="card bg-red9">
                    <p className="tip">Static</p>
                    <p className="second-text"> Fixed content, no server processing.</p>
                </Link>
                <Link href='/spa' className="card bg-[#3b82f6]">
                    <p className="tip">Single Page Web App</p>
                    <p className="second-text">Dynamic, seamless user experience.</p>
                </Link>
                <Link href='/ecommerce' className="card bg-[#22c55e]">
                    <p className="tip">E-commerce</p>
                    <p className="second-text">Online shopping made easy.</p>
                </Link>
            </div>
        </div>
    )
}

export default WebDevCards;