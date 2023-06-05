import React from 'react'

type Props = {}

const WebDevSection = (props: Props) => {
  return (
    <article className='p-5 bg-slate2'>
        <h3 className=' font-semibold text-lg text-red9'>Website Development</h3>
        <h1 className=' font-bold text-3xl tracking-[-0.06em] text-gray-900 mt-5'>We develop three different types of websites</h1>
        <p className='text-slate11 mt-10 font-medium'>
            In the world of web development there are many different forms of websites.
            Here at ThenDigital we specialize in <span className='text-red9'>Static websites</span>, <span className='text-red9'>Single Page Applications</span>, and <span className='text-red9'>E-commerce</span> websites.
        </p>
    </article>
  )
}

export default WebDevSection