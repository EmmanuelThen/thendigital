'use client'
import DialogButton from '@/app/components/DialogButton';
import React, { useState } from 'react'
import DashProgress from './DashProgress';
import Link from 'next/link';
import ArrowButton from '@/app/components/ArrowButton';
import SubTiers from '@/app/components/SubTiers';

type Props = {}

const DashPixelCare = (props: Props) => {
  const [isMember, setIsMember] = useState(true);

  const handleNonMember = () => {
    setIsMember(!isMember)
  }
  return (
    <>
      {isMember ? (
        <div className='flex flex-col gap-10 w-full'>

          <div className='text-center'>
            <p className='text-slate10'>Next Billing Date</p>
            <p className='text-3xl font-semibold'>06/13/23</p>
          </div>
          <button onClick={handleNonMember}>click for nonMember</button>
          <div className=''>
            <div className='flex justify-between text-left'>
              <p className='text-xs font-medium'>Tier:</p>
              <p className='text-xs'>currentTier</p>
            </div>
            <div className='flex justify-between text-left'>
              <p className='text-xs font-medium'>Member since:</p>
              <p className='text-xs'>estimatedDate</p>
            </div>
            <div className='flex justify-between text-left'>
              <p className='text-xs font-medium'>Card on file:</p>
              <p className='text-xs'>currentCard</p>
            </div>
          </div>
        </div>
      ) :
        (
          <div>
            <div className='flex flex-col gap-2 mb-10'>
              <p className='font-light text-3xl tracking-[-0.06em] text-center'>What are you waiting for?</p>
              <p className='text-slate10 text-xs font-medium'>
                Maintain and secure your investment the correct way!
              </p>
              <ArrowButton buttonText='Learn more' href='/pixelcare' />
              <button onClick={handleNonMember}>click for Member</button>
            </div>

            <div className='flex justify-center'>
              <button type='button'>
                <DialogButton
                  buttonText={
                    <p className='bg-blue9 hover:bg-[#3fcf8e] text-white  py-1 px-3 lg:px-8 lg:py-2 rounded '>
                      Purchase
                    </p>
                  }
                  dialogTitle={
                    <>
                      <div id='text_gradient'>PixelCare</div>
                    </>
                  }
                  dialogDesc='Choose your tier'
                  content={<SubTiers />}
                  saveButton='Purchase'
                  saveButtonColor='bg-blue9'
                />
              </button>
            </div>

          </div>
        )}
    </>
  )
}

export default DashPixelCare