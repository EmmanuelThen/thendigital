'use client'
import React from 'react';
import getStripe from '@/stripe/getStripe';

type Props = {}

const PurchaseButton = (props: Props) => {

    const handleSubscribe = async () => {
        try {
            const response = await fetch('/stripe/stripe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applications/json',
                }
            });

            const data = await response.json();
            const { sessionId } = data;

            if (sessionId) {
                const stripe = await getStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
                await stripe.redirectToCheckout({ sessionId });
            }
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    return (

        <button onClick={handleSubscribe} className='bg-blue9 text-white  py-1 px-3 lg:px-10 rounded-lg ' type='button'>
            Purchase
        </button>

    )
}

export default PurchaseButton