import React from 'react'
import ShinyText from './ShinyText'

type Props = {
  children: any,
  topTitle: string,
  shinyText: string,
  side: any,
  bgColor: any
};

const LandingPageSection = ({ children, topTitle, shinyText, side, bgColor }: Props) => {
  return (
    <article className={`md:flex md:justify-center md:items-center p-5 md:p-20 ${bgColor} md:flex`}>
      <div className='md:w-[75%]'>
        <h3 className=' font-semibold text-lg text-red9'>{topTitle}</h3>
        <ShinyText text={shinyText} />
        <div className='mt-10 md:leading-relaxed'>
          {children}
        </div>
      </div>
      {side}
    </article>
  )
}

export default LandingPageSection;