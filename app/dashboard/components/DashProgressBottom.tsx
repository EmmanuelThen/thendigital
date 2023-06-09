import React from 'react'

type Props = {}

const DashProgressBottom = (props: Props) => {
  return (
    <div className=''>
        <div className='flex justify-around text-left'>
            <p className='text-xs font-medium'>Current step:</p>
            <p className='text-xs'>currentStep</p>
        </div>
        <div className='flex justify-around text-left'>
            <p className='text-xs font-medium'>Estimated completion:</p>
            <p className='text-xs'>estimatedDate</p>
        </div>
        <div className='flex justify-around text-left'>
            <p className='text-xs font-medium'>Current step:</p>
            <p className='text-xs'>currentStep</p>
        </div>
    </div>
  )
}

export default DashProgressBottom