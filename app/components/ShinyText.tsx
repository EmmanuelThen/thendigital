import React from 'react'

type Props = {
    text: any
}

const ShinyText = ({ text }: Props) => {
    return (
        <div className='py-2 font-bold mt-5 tracking-[-0.06em] md:leading-[1.10] md:text-[55px] inline-flex animate-backgroundShine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-4xl text-transparent'>
            {text}
        </div>
    )
}

export default ShinyText