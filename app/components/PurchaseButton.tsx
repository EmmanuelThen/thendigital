'use client'
import React from 'react';
import getStripe from '@/stripe/getStripe';

type Props = {
    subTier: any
}

const PurchaseButton = ({ subTier }: Props) => {

    const handleSubscribe = async () => {
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applications/json',
                }
            });
            console.log(response)
            const data = await response.json();
            const { sessionId } = data;
            console.log(data)
            if (sessionId) {
                const stripe = await getStripe();
                await stripe.redirectToCheckout({ sessionId });
            }
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    return (
        <form action="/create-checkout-session" method="POST">
            {/* Add a hidden field with the lookup_key of your Price */}
            <input type="hidden" name="lookup_key" value={subTier} />
            <button onClick={handleSubscribe} className='bg-blue9 text-white  py-1 px-3 lg:px-10 rounded-lg ' id="checkout-and-portal-button" type="submit">
                Purchase
            </button>
        </form>
    )
}

export default PurchaseButton