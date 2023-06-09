import React from 'react'

type Props = {}

const DashProgressBottom = (props: Props) => {
  return (
    <div className=''>
        <div className='flex justify-around text-left'>
            <p className='text-xs font-medium'>Date started:</p>
            <p className='text-xs'>currentStep</p>
        </div>
        <div className='flex justify-around text-left'>
            <p className='text-xs font-medium'>Projected finish:</p>
            <p className='text-xs'>estimatedDate</p>
        </div>
        <div className='flex justify-around text-left'>
            <p className='text-xs font-medium'>Current stage:</p>
            <p className='text-xs'>currentStep</p>
        </div>
    </div>
  )
}

export default DashProgressBottom