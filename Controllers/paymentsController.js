import express from 'express'
import Flutterwave from 'flutterwave-node-v3'

const flw = new Flutterwave(
  process.env.FLW_PUBLIC_KEY,
  process.env.FLW_SECRET_KEY
)

// FlutterwaveCheckout({
//     public_key: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X',
//     tx_ref: reference(),
//     amount: moviePrice * quantity.value,
//     status: hgugug,
//     currency: 'NGN',
//     payment_options: 'card, banktransfer, ussd',
//     redirect_url: 'https://glaciers.titanic.com/handle-flutterwave-payment',
//     meta: {
//       consumer_id: user.id,
//       consumer_mac: '92a3-912ba-1192a',
//     },
//     customer: {
//       email: user.email,
//       phone_number: '08102909304',
//       name: user.name,
//     },
//     customizations: {
//       title: movieName,
//       description: `payment for ${quantity.value} ${movieName} ticket(s)`,
//       logo: 'https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg',
//     },
//   })
