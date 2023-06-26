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
                                    <div className='rounded-full border border-1 border-[#22c55e] bg-[#22c55e]/10 py-[1px] px-3'>
                                        <p className='text-[#22c55e] text-[10px]'>Paid</p>
                                    </div>
                                </>
                            );
                        case 'pending':
                            return (
                                <>
                                    <div className='rounded-full border border-1 border-yellow10 bg-yellow3 py-[1px] px-3'>
                                        <p className='text-yellow8 text-[10px]'>Pending</p>
                                    </div>
                                </>
                            );
                        case 'failed':
                            return (
                                <>
                                    <div className='rounded-full border border-1 border-red9 bg-red4 py-[1px] px-3'>
                                        <p className='text-red9 text-[10px]'>Failed</p>
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