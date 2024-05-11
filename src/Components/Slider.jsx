import { useState } from 'react';
import '../Css/slider.css';
import sliderData from '../Data/slider';
import sliderImg from '../pictures/slider-pizza.png';

const Slider = () => {
  const [data, setData] = useState(sliderData);

  return (
    <>
      <section className='slider-wrapper'>
        <div className='slider-header'>
          <h1>Browse Menu</h1>
        </div>
        <div className='slider-center'>
          {data.map((item) => {
            return (
              <div className='slider-item' key={item.id}>
                <div className='slider-img-wrapper'>
                  <img src={item.img} />
                </div>
                <div className='slider-title'>
                  <p className='slider-name'>{item.name}</p>
                  <p className='slider-price'>{item.price}</p>
                </div>
                <p className='slider-desc'>{item.desc}</p>
                <button className='slider-btn'>order now</button>
              </div>
            );
          })}
        </div>
        <div className='slider-icon-wrapper'>
          <button className='slider-left'>
            <i className='fa-solid fa-chevron-left'></i>
          </button>
          <button className='slider-right'>
            <i className='fa-solid fa-chevron-right'></i>
          </button>
        </div>
      </section>
    </>
  );
};
export default Slider;
