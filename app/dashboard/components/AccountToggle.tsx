import React from 'react'
import Toggle from '@/app/components/Toggle'

type Props = {
    toggleTitle: any
    toggleSubTitle: any
};

const AccountToggle = ({ toggleTitle, toggleSubTitle }: Props) => {
    return (
        <div className=''>
            <Toggle
                label={
                    <>
                        <div>
                            <h1 className='font-medium'>{toggleTitle}</h1>
                            <p className='mt-1 text-[10px] text-slate8'>{toggleSubTitle}</p>
                        </div>
                    </>
                }
                defaultChecked={true}
            />
        </div>
    )
}

export default AccountToggle;