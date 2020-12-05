
const express = require('express');
const cors = require('cors');
const path = require('path');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  });
}

app.get('/', (req, res) => {
  res.send('Bike-commerce');
});

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'mxn'
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    stripeErr
    ? res.status(500).send({ error: stripeErr })
    : res.status(200).send({ succes: stripeRes })
  })
});

app.listen(PORT, () => {
  console.log(`Server run in port: ${PORT}`)
});