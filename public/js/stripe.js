import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe('pk_test_QqCBpwZrOuiiC9jBSfRwKoD600l5GeZXXv');

export const bookTour = async tourId => {
  // 1) Get checkout session from API
  try {
    const session = await axios(
      `http://localhost:8000/api/vi/bookings/checkout-session/${tourId}`
    );

    console.log(session);

    // 2) Create checkout form + charge the credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
    stripe;
  } catch (error) {
    console.log(Error);
    showAlert('error', error);
  }
};
