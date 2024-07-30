import styled from 'styled-components';
import Cart from '../Components/Cart.jsx';
import SubNav from '../Components/SubNav.jsx';
import Location from '../Components/Location.jsx';
import ClientForm from '../Components/ClientForm.jsx';
import Footer from '../Components/Footer.jsx';
import AuthInfo from './AuthInfo.jsx';

const AccPage = () => {
  return (
    <>
      <Wrapper className='section'>
        <section className='acc-container'>
          <SubNav />
          <Location
            title={'Account'}
            desc={'Connect Your Account for more updates'}
          />
          <Cart />
          <AuthInfo />
          <ClientForm />
          <div className='auth-div'>
            <div className='auth-div-center'></div>
          </div>
          <Footer />
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .acc-container {
    min-height: 100vh;
  }

  .auth-info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  .auth-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .auth-name {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .auth-email {
    font-size: 1.1rem;
  }

  .auth-container {
    max-width: 80vw;
    margin: 3rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .auth-heading h1 {
    font-size: 1.8rem;
    text-transform: capitalize;
    font-weight: 500;
    text-align: center;
  }

  .auth-success,
  .auth-unsuccess {
    font-size: 1.1rem;
    text-transform: capitalize;
  }

  .auth-success span {
    color: green;
  }

  .auth-unsuccess span {
    color: red;
  }

  /* buttons */
`;

export default AccPage;
