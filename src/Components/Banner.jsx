import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Banner = () => {
  return (
    <>
      <main>
        <Wrapper className='section'>
          <div className='banner-container'>
            <div className='banner-wrapper'>
              <div className='banner-bg-wrapper animate__animated animate__jackInTheBox'>
                <h1 className='banner-title'>
                  Every <span>Slice</span> Tells a Story
                </h1>
                <h2 className='banner-subtitle'>
                  Explore Our Irresistible Pizza Creations Crafted with Passion
                  and Precision. Order Now for a Taste Journey You Won't Forget!
                </h2>
                <Link to='#' className='order-btn'>
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  );
};

const Wrapper = styled.section`
  .banner-container {
    position: relative;
    width: 100%;
  }
  .banner-bg-wrapper {
    position: absolute;
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  .banner-title {
    font-size: 2.8rem;
    color: #ebebeb;
  }
  .banner-subtitle {
    width: 40%;
    font-size: 1.1rem;
    font-weight: 500;
    color: rgb(212, 212, 212);
    margin-bottom: 16px;
  }
  .banner-title span {
    color: #fd9d3e;
  }
  .order-btn {
    color: var(--clrBlack);
    background-color: var(--clrWhite);
    padding: 8px 26px;
    border-radius: 10rem;
    transition: all 0.2s ease;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
  }
  .order-btn:hover {
    background-color: var(--clrPizza);
    color: var(--clrWhite);
  }
  @media screen and (max-width: 768px) {
    .banner-title {
      font-size: 2rem;
    }
    .banner-subtitle {
      width: 85%;
    }
  }
`;

export default Banner;
