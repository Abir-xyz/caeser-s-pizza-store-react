import { Link } from 'react-router-dom';
import styled from 'styled-components';

const stripeComplete = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <p>Your payment was successful</p>
        <p>Thank You</p>
        <Link to='/'>Go Home</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  p {
    font-size: 1.2rem;
  }
  
`;

export default stripeComplete;
