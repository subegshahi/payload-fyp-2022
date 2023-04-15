import express from "express";
import Stripe from "stripe";
import "dotenv/config";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/stripe-checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/checkoutsuccess",
    cancel_url: "http://localhost:5173/checkout",
    // success_url: `${process.env.CLIENT_URL}/checkoutsuccess`,
    // cancel_url: `${process.env.CLIENT_URL}/booking`,
  });

  res.send({ url: session.url });
});

export { router as stripeRouter };
