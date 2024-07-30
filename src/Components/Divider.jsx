
import dividerTop from '../pictures/divider.png';
import dividerBottom from '../pictures/divider-bottom.png';
import { useState } from 'react';
import data from '../Data/divider.js';
import styled from 'styled-components';

const Divider = () => {
  const [modalData, setData] = useState(data);

  return (
    <>
      <Wrapper className='section'>
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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .divider-top img {
    width: 100%;
    margin-top: -130px;
    height: 150px;
  }

  .divider-bottom img {
    width: 100%;
    height: 130px;
    margin-top: -30px;
  }

  .divider-text-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .divider-item {
    margin-top: -20px;
    text-align: center;
    background-color: var(--themeClr);
    padding: 30px 0;
    color: #222;
  }

  .divider-icon {
    font-size: 3rem;
  }

  .divider-title {
    font-size: 1.1rem;
  }

  .divider-text p {
    width: 65%;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.6;
  }

  /* --------------------------------- responsive ------------- */
  @media screen and (max-width: 768px) {
    .divider-text-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Divider;
