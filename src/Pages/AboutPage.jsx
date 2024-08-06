import styled from 'styled-components';
import SubNav from '../Components/SubNav';
import Footer from '../Components/Footer';
import Location from '../Components/Location';
import About from '../Components/HomeAbt';
import Divider from '../Components/Divider';
import Reviews from '../Components/Reviews';

const AboutPage = () => {
  return (
    <Wrapper className='section'>
      <main className='main'>
        <div>
          <SubNav />
        </div>
        <div>
          <Location
            title={'About'}
            desc={'Crafting quality experiences with passion and dedication.'}
          />
        </div>
        <div className='about-contents'>
          <div>
            <About />
          </div>
          <div className='exp'>
            <h1>Over 10 years of experience</h1>
            <p>
              Creating pizza entails skillfully blending fresh ingredients,
              expertly stretching dough, and mastering precise baking
              techniques.
            </p>
          </div>
          <div className='divider'>
            <Divider />
          </div>
          <div>
            <Reviews />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-contents .home-abtBtn {
    display: none;
  }

  .about-contents .exp {
    max-width: 90vw;
    margin: 2rem auto;
  }

  .about-contents .exp {
    text-align: center;
  }

  .about-contents .exp p {
    font-size: 1.1rem;
    padding: 10px;
    line-height: 1.5;
  }

  .about-contents .divider {
    margin: 2rem 0;
  }

  .about-contents .divider-wrapper {
    background-color: beige;
    padding: 5rem 0;
  }

  .about-contents .divider-wrapper .divider-item {
    background-color: beige;
  }

  .about-contents .divider .divider-top {
    display: none;
  }
  .about-contents .divider .divider-bottom {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .about-contents .exp {
      text-align: center;
    }
    .about-contents .exp h1 {
      font-size: 2rem;
    }
    .about-contents .exp p {
      font-size: 1.1rem;
      padding: 10px;
      width: 75%;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 768px) {
    .about-contents .abt h1 {
      font-size: 1.5em;
    }
  }
  @media screen and (min-width: 768px) {
    .about-contents .abt h1 {
      font-size: 1.5em;
    }
  }
  @media screen and (min-width: 1200px) {
    .about-contents .exp p {
      width: 45%;
    }
  }
`;

export default AboutPage;
