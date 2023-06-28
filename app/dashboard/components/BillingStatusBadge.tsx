'use client'
import React, { useState } from 'react'

type Props = {
    paymentStatus: any
}

const BillingStatusBadge = ({ paymentStatus }: Props) => {


    return (
        <>
            <div>
                {(() => {
                    switch (paymentStatus) {
                        case 'paid':
                            return (
                                <>
                                    <div className='rounded-full border border-1 border-[#22c55e] bg-[#22c55e]/10 py-[1px] px-[3px] lg:px-3 cursor-default'>
                                        <p className='text-[#22c55e] text-[8px] lg:text-[10px]'>Paid</p>
                                    </div>
                                </>
                            );
                        case 'pending':
                            return (
                                <>
                                    <div className='rounded-full border border-1 border-yellow8 bg-yellow3 py-[1px] px-[3px] lg:px-3 cursor-default'>
                                        <p className='text-yellow8 text-[8px] lg:text-[10px]'>Pending</p>
                                    </div>
                                </>
                            );
                        case 'failed':
                            return (
                                <>
                                    <div className='rounded-full border border-1 border-red9 bg-red4 py-[1px] px-[3px] lg:px-3 cursor-default'>
                                        <p className='text-red9 text-[8px] lg:text-[10px]'>Failed</p>
                                    </div>
                                </>
                            );
                        case 'downpayment':
                            return (
                                <>
                                    <div className='rounded-full border border-1 border-slate10 bg-slate4 py-[1px] px-[3px] lg:px-3 cursor-default'>
                                        <p className='text-slate10 text-[8px] lg:text-[10px]'>Deposit paid</p>
                                    </div>
                                </>
                            );
                        default:
                            return null; // Render nothing or fallback UI
                    }
                })()}
            </div>
        </>
    )
}

export default BillingStatusBadge