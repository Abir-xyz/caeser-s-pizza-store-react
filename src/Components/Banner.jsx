import '../Css/banner.css';

const Banner = () => {
  return (
    <>
      <div className='banner-container'>
        <div className='banner-wrapper'>
          <div className='banner-bg-wrapper animate__animated animate__jackInTheBox'>
            <h1 className='banner-title'>
              Every <span>Slice</span> Tells a Story
            </h1>
            <h2 className='banner-subtitle'>
              Explore Our Irresistible Pizza Creations Crafted with Passion and
              Precision. Order Now for a Taste Journey You Won't Forget!
            </h2>
            <button className='order-btn'>Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
