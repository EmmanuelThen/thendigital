import React, { useState, useEffect } from 'react';
import BillingStatusBadge from './BillingStatusBadge';
import Link from 'next/link';
import PaymentStatusButton from './PaymentStatusButton';

const BillingHistoryTable = () => {

    const [paymentButtonDisplay, setPaymentButtonDisplay] = useState('');
    // Using a function as its original state, to conditionally initialize the 'billingHistory' state based on if the 'billingHistory ket exist in local storage,
    // If it does exist the stored history is parsed back to the array with JSON.parse(), otherwise an empty aray is used as the inital state.
    const [billingHistory, setBillingHistory] = useState(() => {
        const storedHistory = localStorage.getItem('billingHistory');
        return storedHistory ? JSON.parse(storedHistory) : [];
    });



    //To add a new invoice
    function addInvoiceToHistory(billingHistory: any[], paymentStatus: string, amount: number) {
        const newInvoice = {
            date: '2023-06-25',
            details: 'Invoice #124',
            amount: amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
            paymentStatus: paymentStatus,
            downloadLink: '/invoices/124'
        };

        const updatedHistory = [...billingHistory, newInvoice];
        localStorage.setItem('billingHistory', JSON.stringify(updatedHistory));
        setBillingHistory(updatedHistory);

        localStorage.setItem('paymentStatus', paymentStatus)
        localStorage.setItem('paymentButtonDisplay', paymentButtonDisplay);
    }


    // Functions to test payment status on billing history
    /*const handleFailedPaymentStatus = () => {
        setPaymentStatus('failed')
    }
    const handlePaidPaymentStatus = () => {
        setPaymentStatus('paid')
    }
    const handlePendingPaymentStatus = () => {
        setPaymentStatus('pending')
    }*/

    /*useEffect(() => {
        if (paymentStatus === 'failed') {
            setPaymentButtonDisplay('');
        } else {
            setPaymentButtonDisplay('hidden');
        }
    }, [paymentStatus]);*/



    //Test function to clear local storage
    const clearLocalStorage = () => {
        localStorage.clear();
    }


    return (
        <div className="max-h-72 overflow-y-auto w-full">
            {/** Test buttons for payment statuses */}
            
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className='flex justify-between bg-slate5'>
                        <th className="sticky top-0 mx-3 py-3 text-left text-xs font-medium text-blue9 uppercase tracking-wider">
                            Date
                        </th>
                        <th className="sticky top-0  py-3 ml-20 text-left text-xs font-medium text-blue9 uppercase tracking-wider">
                            Details
                        </th>
                        <th className="sticky top-0  py-3 ml-20 text-left text-xs font-medium text-blue9 uppercase tracking-wider">
                            Amount
                        </th>
                        <th className="sticky top-0  py-3 ml-20 text-left text-xs font-medium text-blue9 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="sticky top-0 mx-3 py-3 text-left text-xs font-medium text-blue9 uppercase tracking-wider">
                            Download
                        </th>
                    </tr>
                </thead>
            </table>
            <div className="max-h-72 overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                        {billingHistory.length < 1 ?
                            (
                                <>
                                    <div className='w-full p-5 flex flex-col justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="hsl(205 10.7% 78.0%)" className="w-20 h-20">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>

                                        <h1 className='font-light text-4xl text-slate8'>No invoices found</h1>
                                    </div>
                                </>
                            ) :
                            (billingHistory.map((entry, i) => (
                                <tr className='flex justify-between' key={i}>
                                    <td className="mx-3 py-3">{entry.date}</td>
                                    <td className="py-3">{entry.details}</td>
                                    <td className="py-3 font-medium">{entry.amount}</td>
                                    <div className='flex items-center gap-3 px-5'>
                                        <td className='py-3'><BillingStatusBadge paymentStatus={entry.paymentStatus} /></td>
                                        {entry.paymentStatus === 'failed' && (
                                            <td className={`${paymentButtonDisplay} py-3`}>
                                                <PaymentStatusButton
                                                    paymentStatus={entry.paymentStatus}
                                                />
                                            </td>
                                        )}
                                    </div>
                                    <td className="mx-3 py-3">
                                        <Link href={entry.downloadLink} download className=" text-blue-500 hover:text-blue-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            )))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default BillingHistoryTable;




