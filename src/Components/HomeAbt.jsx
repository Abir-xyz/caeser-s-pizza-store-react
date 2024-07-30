import abtImg from '../pictures/5.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeAbt = () => {
  return (
    <Wrapper className='section'>
      <section className='abt-container'>
        <div className='abt-center'>
          <div className='abt'>
            <h1>Quality is our pride</h1>
            <p>
              Welcome to Caesar's Pizza Shop! Since 2005, we've been a beloved
              fixture in downtown, known for our warm atmosphere and exceptional
              service. We craft our pizzas with the freshest
              ingredients—daily-made dough, premium mozzarella, vine-ripened
              tomatoes, and artisan meats. Whether you love classic Margherita
              or gourmet creations, our menu has something for everyone. Watch
              our skilled pizzaiolos at work in our open kitchen and enjoy a
              true pizza experience. At Caesar's, we’re more than just a pizza
              shop—we’re a place where delicious memories are made. Come and
              taste the difference!
            </p>
            <Link to='about' className='home-abtBtn'>
              Read More
            </Link>
          </div>
          <div className='abt'>
            <div className='abt-img-wrapper'>
              <img src={abtImg} className='abt-img' />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .abt-container {
    max-width: 80vw;
    margin: 3rem auto;
  }

  .abt-img {
    width: 100%;
    border-radius: 5px;
  }

  .abt h1 {
    margin-bottom: 20px;
  }

  .abt p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 30px;
  }

  .home-abtBtn {
    background-color: var(--themeClr);
    color: #fff;
    font-size: 1.1rem;
    padding: 8px 16px;
    border-radius: 10rem;
    transition: all 0.3s ease-in-out;
  }

  .home-abtBtn:hover {
    background-color: red;
  }

  @media screen and (min-width: 768px) {
    .abt-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .abt-img {
      width: 350px;
    }
    .abt h1 {
      font-size: 2rem;
      font-weight: 600;
    }
  }

  @media screen and (min-width: 1200px) {
    .abt-img {
      width: 600px;
    }
    .abt p {
      width: 75%;
    }
  }
`;

export default HomeAbt;
