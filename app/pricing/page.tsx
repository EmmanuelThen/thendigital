import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <div className='relative flex justify-center items-center h-screen w-full snap-y snap-start snap-mandatory'>
                <div className="absolute border border-red9 rounded-full h-[200px] w-[200px] mt-52 animate-ping " />{/*absolutely positioned relative to the parent*/}
                <div className="absolute border border-red9 rounded-full h-[300px] w-[300px] mt-52 " />
                <div className="absolute border border-red9 rounded-full h-[500px] w-[500px] mt-52 " />
                <div className="absolute border border-blue9 opacity-10 rounded-full h-[650px] w-[650px] mt-52 animate-pulse " />
                <div className="absolute border border-blue9 rounded-full h-[800px] w-[800px] mt-52 " />
                <div className='relative'>
                    Static
                </div>
            </div>
            <div className='h-screen w-full snap-y snap-center'>

            </div>
            <div className='h-screen w-full snap-y snap-center'>

            </div>
            <div className='h-screen w-full snap-y snap-center'>

            </div>
        </>
    )
}

export default page