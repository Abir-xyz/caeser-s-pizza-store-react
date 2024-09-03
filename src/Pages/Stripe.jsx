import styled from 'styled-components';
import StripeCheckout from '../Components/StripeCheckout';
import { useCartContext } from '../Context/CartContexts';
import { useAuth0 } from '@auth0/auth0-react';

const Stripe = () => {
  const { totalPrice } = useCartContext();
  const { user, isAuthenticated } = useAuth0();

  return (
    <Wrapper className='section'>
      <div className='content'>
        <div className='info-wrapper'>
          {isAuthenticated && <p className='name'>Hi, {user.name} </p>}
          <p>Your total is ${totalPrice.toFixed(2)} </p>
          <div className='test-card-info'>
            <p>Test Card: 4242 4242 4242 4242</p>
          </div>
        </div>
        <StripeCheckout />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    overflow: hidden;
  }
  .content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    p {
      font-size: 1.2rem;
    }
    .name {
      font-weight: 500;
    }
  }
  .test-card-info {
    margin-top: 10px;
    p {
      font-size: 0.9rem;
    }
  }
`;

export default Stripe;
