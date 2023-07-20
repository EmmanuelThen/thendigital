import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripeKey = process.env.STRIPE_SECRET_KEY as string

export const stripe = new Stripe(stripeKey, {
    apiVersion: '2022-11-15',
});

// export default async function createCheckoutSession(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.method !== 'POST') {
//         res.status(405).json({ message: 'Method Not Allowed' });
//         return;
//     }

//     try {
//         const session = await stripe.checkout.sessions.create({
//             mode: 'subscription',
//             payment_method_types: ['card'],
//             line_items: [
//                 {
//                     price: process.env.NEXT_PUBLIC_PRODUCT_ID_1,
//                     quantity: 1,
//                 },
//                 {
//                     price: process.env.NEXT_PUBLIC_PRODUCT_ID_2,
//                     quantity: 1,
//                 },
//                 {
//                     price: process.env.NEXT_PUBLIC_PRODUCT_ID_3,
//                     quantity: 1,
//                 },
//             ],
//             success_url: 'http://localhost:3000/success',
//             cancel_url: 'http://localhost:3000/pixelcare',
//         });

//         res.status(200).json({ sessionId: session.id });
//     } catch (error) {
//         console.error('Error creating checkout session:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// }
