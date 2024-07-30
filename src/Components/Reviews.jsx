
import reviews from '../Data/reviews';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper className='section'>
      <section className='reviews-container'>
        <div className='reviews-header'>
          <h1>Once You Try It, You Can't Go Back</h1>
        </div>

        <Carousel
          responsive={responsive}
          className='reviews-wrapper'
          showDots={true}
        >
          {reviews.map((item) => {
            return (
              <div className='review' key={item.id}>
                <img src={item.img} className='client-img' />
                <p className='client-name'>{item.name}</p>
                <p className='client-txt'>{item.txt}</p>
              </div>
            );
          })}
        </Carousel>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .reviews-container {
    max-width: 80vw;
    margin: 5rem auto;
  }

  .reviews-header {
    margin: 4rem 0;
  }

  .review {
    margin: 26px 0;
    text-align: center;
  }

  .client-name {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 10px 0;
    text-transform: capitalize;
  }

  .client-txt {
    line-height: 1.6;
    color: gray;
  }

  .client-img {
    border-radius: 50%;
    width: 80px;
  }

  @media screen and (min-width: 768px) {
    .reviews-header h1 {
      font-size: 2rem;
      font-weight: 600;
    }
    .reviews-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .client-txt {
      width: 75%;
      margin: 0 auto;
    }
  }
`;

export default Reviews;
