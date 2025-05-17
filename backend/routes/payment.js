require('dotenv').config();
const stripe = require('stripe')(process.env.API_STRIPE);
const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/donate/:price', async (req, res) => {
  const YOUR_PRICE = req.params.price * 100; 

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'PKR',
          product_data: {
            name: 'Donation',
          },
          unit_amount: parseInt(YOUR_PRICE),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3001/main/success', 
    cancel_url: 'http://localhost:3001/main/dashboard', 
  });

  res.json({ sessionId: session.url });
});

module.exports = router;
