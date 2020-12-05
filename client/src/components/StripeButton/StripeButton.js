import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_51Hjzj6H0FO59ioJ3X5qXYwDqGuRsSCWD8bMYJGthOw6Xi24DzlMBLIjFVZfLpeoPuk2SqB7uYZN0Lymci50P9P1400eUytv3lz';

  const onToken = (token) => {
    axios.post('/payment', {
      token,
      amount: priceForStripe
    }).then((response) => {
      alert('El pago se hizo correctamente...');
    }).catch((error) => {
      alert('Ocurrio un Error, verifica que los datos de la tarjeta sean correctos!!')
    })
  }
  return (
    <StripeCheckout
      label="Pagar ahora"
      name="Bikes 4 All Ltd."
      billingAddress
      shippingAddress
      bitcoin
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`El total es $${price}`}
      amount={priceForStripe}
      panelLabel="Paga ahora"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckoutButton;