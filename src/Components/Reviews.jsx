import '../Css/reviews.css';
import reviews from '../Data/reviews';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
  );
};
export default Reviews;
