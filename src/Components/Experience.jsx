
import expImg from '../pictures/pizza1.png';
import styled from 'styled-components';

const Experience = () => {
  return (
    <>
      <Wrapper className='section'>
        <section className='experience-wrapper'>
          <div className='exp-center'>
            <div className='exp-text-wrap exp-wrap'>
              <h1>
                Over 10 years of <span>experience</span>
              </h1>
              <p>
                Creating pizza entails skillfully blending fresh ingredients,
                expertly stretching dough, and mastering precise baking
                techniques.
              </p>
            </div>
            <div className='exp-wrap'>
              <img src={expImg} className='exp-img' />
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .exp-img {
    display: block;
    width: 450px;
  }

  /* responsive */

  @media screen and (min-width: 768px) {
    .experience-wrapper {
      max-width: 80vw;
      margin: 0 auto;
    }
    .exp-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .exp-text-wrap p {
      width: 50%;
      font-size: 1.1rem;
    }
    .exp-text-wrap h1 {
      font-size: 2rem;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1200px) {
    .exp-img {
      width: 350px;
    }

    .exp-text-wrap p {
      width: 85%;
    }
  }

  @media screen and (max-width: 768px) {
    .exp-text-wrap h1 {
      font-size: 1.5rem;
    }
    .experience-wrapper {
      max-width: 90vw;
      margin: 0 auto;
    }
    .exp-center {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .exp-img {
      width: 300px;
    }
    .exp-text-wrap {
      text-align: center;
    }
    .exp-text-wrap p {
      width: 95%;
    }
  }
`;

export default Experience;
