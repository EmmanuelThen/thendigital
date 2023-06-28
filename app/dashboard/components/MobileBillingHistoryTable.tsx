import React, { useState, useEffect } from 'react';
import BillingStatusBadge from './BillingStatusBadge';
import Link from 'next/link';
import PaymentStatusButton from './PaymentStatusButton';
import MobilePaymentStatusButton from './MobilePaymentStatusButton';
import MobileBillingStatusBadge from './MobileBillingStatusBadge';

const MobileBillingHistoryTable = () => {
    const [paymentButtonDisplay, setPaymentButtonDisplay] = useState('');

    const [billingHistory, setBillingHistory] = useState(() => {
        const storedHistory = localStorage.getItem('billingHistory');
        return storedHistory ? JSON.parse(storedHistory) : [];
    });

    function addInvoiceToHistory(billingHistory: any[], paymentStatus: string, amount: number) {
        const newInvoice = {
            date: '2023-06-25',
            invoice: 'I123123123',
            amount: amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            }),
            paymentStatus: paymentStatus,
            downloadLink: '/invoices/124'
        };

        const updatedHistory = [...billingHistory, newInvoice];
        localStorage.setItem('billingHistory', JSON.stringify(updatedHistory));
        setBillingHistory(updatedHistory);

        localStorage.setItem('paymentStatus', paymentStatus)
        localStorage.setItem('paymentButtonDisplay', paymentButtonDisplay);
    }

    const clearLocalStorage = () => {
        localStorage.clear();
    }

    return (
        <div className="max-h-72 overflow-y-auto w-full">
            {/* Test buttons for payment statuses */}
            {/*<div className="flex space-x-2 my-2">
                <button onClick={() => addInvoiceToHistory(billingHistory, 'paid', 500)} className="text-white text-xs border border-1 p-2 rounded-lg bg-blue-500">
                    Test for new paid invoice
                </button>
                <button onClick={() => addInvoiceToHistory(billingHistory, 'pending', 1500)} className="text-white text-xs border border-1 p-2 rounded-lg bg-violet-500">
                    Test for new pending invoice
                </button>
                <button onClick={() => addInvoiceToHistory(billingHistory, 'failed', 5000)} className="text-white text-xs border border-1 p-2 rounded-lg bg-orange-500">
                    Test for new failed invoice
                </button>
                <button onClick={() => addInvoiceToHistory(billingHistory, 'downpayment', 12000)} className="text-white text-xs border border-1 p-2 rounded-lg bg-pink-500">
                    Test for new downpayment invoice
                </button>
                <button onClick={clearLocalStorage} className="text-white text-xs border border-1 p-2 rounded-lg bg-slate-800">
                    Clear local storage
                </button>
    </div>*/}
            <div className="max-h-72 overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200 overflow-ellipsis whitespace-nowrap">
                    <thead>
                        <tr className='flex justify-between bg-slate8'>
                            <th className="w-1/5 text-left text-[10px] font-medium text-blue9 uppercase tracking-wider flex justify-center">
                                Date
                            </th>
                            <th className="w-1/5 text-left text-[10px] font-medium text-blue9 uppercase tracking-wider flex justify-center">
                                Invoice
                            </th>
                            <th className="w-1/5 text-left text-[10px] font-medium text-blue9 uppercase tracking-wider flex justify-center">
                                Total
                            </th>
                            <th className="w-1/5 text-left text-[10px] font-medium text-blue9 uppercase tracking-wider flex justify-center">
                                Status
                            </th>
                            <th className="w-1/5 text-left text-[10px] font-medium text-blue9 uppercase tracking-wider flex justify-center">
                                Download
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {billingHistory.length < 1 ? (
                            <tr>
                                <td colSpan={5} className="p-5 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="hsl(205 10.7% 78.0%)" className="w-20 h-20 mx-auto">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    <h1 className="font-light text-4xl text-slate8">No invoices found</h1>
                                </td>
                            </tr>
                        ) : (
                            billingHistory.map((entry: any, i: any) => (
                                <tr className='flex justify-between items-center text-[10px]' key={i}>
                                    <td className="w-1/5  flex justify-center">{entry.date}</td>
                                    <td className="w-1/5  flex justify-center">{entry.invoice}</td>
                                    <td className="w-1/5  font-medium flex justify-center">{entry.amount}</td>
                                    <div className='w-1/5  flex flex-col justify-center items-center py-3'>
                                        <td className=''><MobileBillingStatusBadge paymentStatus={entry.paymentStatus} /></td>
                                        {entry.paymentStatus === 'failed' && (
                                            <td className={`${paymentButtonDisplay} `}>
                                                <MobilePaymentStatusButton
                                                    paymentStatus={entry.paymentStatus}
                                                />
                                            </td>
                                        )}
                                    </div>
                                    <td className="w-1/5 py-3 flex justify-center">
                                        <Link href={entry.downloadLink} download className="text-blue-500 hover:text-blue-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MobileBillingHistoryTable;