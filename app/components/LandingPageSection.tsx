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
    <article className={`p-5 ${bgColor} md:flex`}>
      <div className='md:w-[75%]'>
        <h3 className=' font-semibold text-lg text-red9'>{topTitle}</h3>
        <ShinyText text={shinyText} />
        <p className='mt-10 font-medium'>
          {children}
        </p>
      </div>
      {side}
    </article>
  )
}

export default LandingPageSection;