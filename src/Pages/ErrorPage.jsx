import { Link } from 'react-router-dom';
import SubNav from '../Components/SubNav';
import { Cart } from '../Components';
import Footer from '../Components/Footer.jsx';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <>
      <Wrapper className='section'>
        <main className='error-main'>
          <SubNav />
          <div className='error-wrapper'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to='/' className='error-btn'>
              Back To Home
            </Link>
          </div>
          <Cart />
          <Footer />
        </main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .error-main {
    min-height: 100vh;
  }

  .error-wrapper {
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .error-wrapper h1 {
    font-size: 8rem;
  }

  .error-wrapper h2 {
    font-weight: 600;
  }

  .error-btn {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: #fff;
    background-color: #000;
    padding: 8px 16px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  .error-btn:hover {
    background-color: #333;
  }
`;

export default ErrorPage;
