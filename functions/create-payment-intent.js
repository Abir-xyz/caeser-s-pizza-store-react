const stripe = require('stripe')(process.env.VITE_STRIPE_PASS_KEY);

const calculateOrderAmount = (items) => {
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  let total = 0;
  total += items;

  return total;
};

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    try {
      const { mainPrice } = JSON.parse(event.body);

      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(mainPrice),
        currency: 'usd',
      });

      return {
        statusCode: 200,
        body: JSON.stringify({
          clientSecret: paymentIntent.client_secret,
          dpmCheckerLink: 'https://example.com/dpm-checker', // or your actual link
        }),
      };
    } catch (error) {
      console.error('Error creating payment intent:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method Not Allowed' }),
  };
};
