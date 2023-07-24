'use client'
import React from 'react';
import getStripe from '@/stripe/getStripe';
import createCheckoutSession from '@/app/api/stripe';


type Props = {
    subTier: any
}

const PurchaseButton = ({ subTier }: Props) => {

    const handleSubscribe = async () => {
        try {
            const products = [
                'pixelcare',
                'pixelcare-plus',
                'pixelcare-elite',
            ];

            const response = await fetch('/api/stripe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ lookup_keys: products }),
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            if (data && data.id) {
                const stripe = await getStripe();
                await stripe.redirectToCheckout({ sessionId: data.id });
            }
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    return (
        <div>
            {/* Add a hidden field with the lookup_key of your Price */}
            <input type="hidden" name="lookup_key" value={subTier} />
            <button
                onClick={handleSubscribe}
                type='submit'
                role='link'
                className='bg-blue9 hover:bg-[#3fcf8e] text-white  py-1 px-3 lg:px-10 rounded ' id="checkout-and-portal-button"
            >
                Purchase
            </button>
        </div>
    )
}

export default PurchaseButton