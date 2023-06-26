import React, { useState } from 'react';
import BillingStatusBadge from './BillingStatusBadge';

const BillingHistoryTable = () => {
    const [paymentStatus, setPaymentStatus] = useState('');

    // Sample data for the billing history
    const billingHistory = [
        { date: '2023-06-24', details: 'Invoice #123', amount: 100, paymentStatus: `${paymentStatus}`, downloadLink: '/invoices/123' },
        { date: '2023-06-23', details: 'Invoice #122', amount: 150, paymentStatus: `${paymentStatus}`, downloadLink: '/invoices/122' },
        { date: '2023-06-22', details: 'Invoice #121', amount: 200, paymentStatus: `${paymentStatus}`, downloadLink: '/invoices/121' },
        { date: '2023-06-21', details: 'Invoice #120', amount: 250, paymentStatus: `${paymentStatus}`, downloadLink: '/invoices/120' },
        { date: '2023-06-21', details: 'Invoice #120', amount: 250, paymentStatus: `${paymentStatus}`, downloadLink: '/invoices/120' },
        { date: '2023-06-21', details: 'Invoice #120', amount: 250, paymentStatus: `${paymentStatus}`, downloadLink: '/invoices/120' },
        { date: '2023-06-21', details: 'Invoice #120', amount: 250, paymentStatus: `${paymentStatus}`, downloadLink: '/invoices/120' },
        { date: '2023-06-21', details: 'Invoice #120', amount: 250, paymentStatus: `${paymentStatus}`, downloadLink: '/invoices/120' },
        // ... Add more billing history entries here
    ];

    // Functions to test payment status on billing history
    const handleFailedPaymentStatus = () => {
        setPaymentStatus('failed')
    }
    const handlePaidPaymentStatus = () => {
        setPaymentStatus('paid')
    }
    const handlePendingPaymentStatus = () => {
        setPaymentStatus('pending')
    }


    return (
        <div className="max-h-72 overflow-y-auto w-full">
            {/** Test buttons for payment statuses */}
            <button onClick={handlePaidPaymentStatus} className='border border-1 p-2 rounded-lg bg-green9'>
                Test for paid
            </button>
            <button onClick={handlePendingPaymentStatus} className='border border-1 p-2 rounded-lg bg-yellow9'>
                Test for pending
            </button>
            <button onClick={handleFailedPaymentStatus} className='border border-1 p-2 rounded-lg bg-red9'>
                Test for failed
            </button>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr className='flex justify-between bg-slate5'>
                        <th className="sticky top-0 mx-3 py-3 text-left text-xs font-medium text-blue9 uppercase tracking-wider">
                            Date
                        </th>
                        <th className="sticky top-0  py-3 text-left text-xs font-medium text-blue9 uppercase tracking-wider">
                            Details
                        </th>
                        <th className="sticky top-0  py-3 text-left text-xs font-medium text-blue9 uppercase tracking-wider">
                            Amount
                        </th>
                        <th className="sticky top-0  py-3 text-left text-xs font-medium text-blue9 uppercase tracking-wider">
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
                        {billingHistory.map((entry, i) => (
                            <tr className='flex justify-between' key={i}>
                                <td className="mx-3 py-3">{entry.date}</td>
                                <td className="py-3">{entry.details}</td>
                                <td className="py-3 font-medium">${entry.amount}</td>
                                <td className='py-3' id='status'><BillingStatusBadge paymentStatus={entry.paymentStatus} /></td>
                                <td className="mx-3 py-3">
                                    <a href={entry.downloadLink} download className="text-blue-500 hover:text-blue-700">
                                        Download
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default BillingHistoryTable;




