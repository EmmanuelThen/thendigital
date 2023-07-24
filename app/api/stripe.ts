// Stripe server
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';


const stripeKey = process.env.STRIPE_SECRET_KEY as string
const domain = 'http://localhost:3000'


export const stripe = new Stripe(stripeKey, {
    apiVersion: '2022-11-15',
});

export default async function createCheckoutSession(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    try {
        const prices = await stripe.prices.list({
            lookup_keys: [req.body.lookup_key],
            expand: ['data.product'],
        });

        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            billing_address_collection: 'auto',
            payment_method_types: ['card', 'paypal', 'us_bank_account'],
            line_items: [
                {
                    price: prices.data[0].id,
                    quantity: 1,
                },
                {
                    price: prices.data[1].id,
                    quantity: 1,
                },
                {
                    price: prices.data[2].id,
                    quantity: 1,
                },
            ],
            success_url: `${process.env.SUCCESS_URL}`,
            cancel_url: `${process.env.CANCEL_URL}`,
            automatic_tax: {enabled: true},
        });
        //res.redirect(303, session.url);
        //res.status(200).json(session)
        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// app.post(
//     '/webhook',
//     express.raw({ type: 'application/json' }),
//     (request, response) => {
//         let event = request.body;
//         // Replace this endpoint secret with your endpoint's unique secret
//         // If you are testing with the CLI, find the secret by running 'stripe listen'
//         // If you are using an endpoint defined with the API or dashboard, look in your webhook settings
//         // at https://dashboard.stripe.com/webhooks
//         const endpointSecret = 'whsec_12345';
//         // Only verify the event if you have an endpoint secret defined.
//         // Otherwise use the basic event deserialized with JSON.parse
//         if (endpointSecret) {
//             // Get the signature sent by Stripe
//             const signature = request.headers['stripe-signature'];
//             try {
//                 event = stripe.webhooks.constructEvent(
//                     request.body,
//                     signature,
//                     endpointSecret
//                 );
//             } catch (err) {
//                 console.log(`⚠️  Webhook signature verification failed.`, err.message);
//                 return response.sendStatus(400);
//             }
//         }
//         let subscription;
//         let status;
//         // Handle the event
//         switch (event.type) {
//             case 'customer.subscription.trial_will_end':
//                 subscription = event.data.object;
//                 status = subscription.status;
//                 console.log(`Subscription status is ${status}.`);
//                 // Then define and call a method to handle the subscription trial ending.
//                 // handleSubscriptionTrialEnding(subscription);
//                 break;
//             case 'customer.subscription.deleted':
//                 subscription = event.data.object;
//                 status = subscription.status;
//                 console.log(`Subscription status is ${status}.`);
//                 // Then define and call a method to handle the subscription deleted.
//                 // handleSubscriptionDeleted(subscriptionDeleted);
//                 break;
//             case 'customer.subscription.created':
//                 subscription = event.data.object;
//                 status = subscription.status;
//                 console.log(`Subscription status is ${status}.`);
//                 // Then define and call a method to handle the subscription created.
//                 // handleSubscriptionCreated(subscription);
//                 break;
//             case 'customer.subscription.updated':
//                 subscription = event.data.object;
//                 status = subscription.status;
//                 console.log(`Subscription status is ${status}.`);
//                 // Then define and call a method to handle the subscription update.
//                 // handleSubscriptionUpdated(subscription);
//                 break;
//             default:
//                 // Unexpected event type
//                 console.log(`Unhandled event type ${event.type}.`);
//         }
//         // Return a 200 response to acknowledge receipt of the event
//         response.send();
//     }
// );
