import '../Css/divider.css';
import dividerTop from '../pictures/divider.png';
import dividerBottom from '../pictures/divider-bottom.png';
import { useState } from 'react';
import data from '../Data/divider.js';

const Divider = () => {
  const [modalData, setData] = useState(data);

  return (
    <>
      <section className='divider-wrapper'>
        <div className='divider-top'>
          <img src={dividerTop} />
        </div>
        <div className='divider-text-wrapper'>
          {modalData.map((item) => {
            return (
              <div className='divider-item' key={item.id}>
                <span className='divider-icon'>
                  <i className={item.icon}></i>
                </span>
                <span className='divider-title'>
                  <h1>{item.title}</h1>
                </span>
                <span className='divider-text'>
                  <p>{item.text}</p>
                </span>
              </div>
            );
          })}
        </div>
        <div className='divider-bottom'>
          <img src={dividerBottom} />
        </div>
      </section>
    </>
  );
};
export default Divider;
