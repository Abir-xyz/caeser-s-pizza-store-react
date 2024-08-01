import Navbar from '../Components/SubNav';
import Cart from '../Components/Cart';
import Footer from '../Components/Footer';
import Location from '../Components/Location';
import { useState } from 'react';
import data from '../Data/menu';
import OrderButtons from '../Components/OrderButtons';
import styled from 'styled-components';

const CategoryPage = () => {
  const [menu, setMenu] = useState(data);

  const category = ['All', ...new Set(menu.map((item) => item.category))];

  const filterCategory = (category) => {
    if (category === 'All') {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <Wrapper className='section'>
      <div className='menu-nav'>
        <Navbar />
      </div>
      <section className='menu-container'>
        <div className='menu-location'>
          <Location
            title={'Menu'}
            desc={'We got everything that your heart desires!'}
          />
        </div>
        <div className='menu-contents'>
          <div className='menu-btn-wrapper'>
            {category.map((btn) => {
              return (
                <button
                  key={btn}
                  onClick={() => filterCategory(btn)}
                  className='category-btn'
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <div className='menu-items-wrapper'>
            {menu.map((item) => {
              return (
                <div className='menu-item' key={item.id}>
                  <div className='menu-img-wrapper'>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className='menu-title'>
                    <p className='menu-name'>{item.name}</p>
                    <p className='menu-price'>${item.price}</p>
                  </div>
                  <p className='menu-desc'>{item.desc}</p>
                  <OrderButtons item={item} />
                </div>
              );
            })}
          </div>
        </div>
        <div className='menu-footer'>
          <Footer />
        </div>
        <Cart />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .menu-contents {
    max-width: 90vw;
    margin: 0 auto;
    margin-bottom: 5rem !important;
  }

  .menu-item img {
    width: 200px;
    height: 200px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .menu-item img:hover {
    transform: scale(1.1);
  }

  .menu-name {
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 500;
    margin-right: 10px;
  }

  .menu-price {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .menu-desc {
    text-transform: capitalize;
    font-size: 1.1rem;
    padding: 30px 0;
    line-height: 1.7;
  }

  .menu-btn {
    background: none;
    border: none;
    font-size: 1.1rem;
    text-transform: capitalize;
    font-weight: 500;
    cursor: pointer;
    background-color: var(--themeClr);
    color: #fff;
    padding: 8px 12px;
    border-radius: 10rem;
    transition: all 0.3s ease-in-out;
  }

  .menu-btn:hover {
    background-color: red;
  }

  .menu-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
  }

  .menu-item {
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 35px;
    margin: 20px 10px;
  }

  .menu-img-wrapper {
    display: flex;
    justify-content: center;
  }

  .menu-icon-wrapper {
    text-align: center;
    margin: 30px 0;
  }

  .menu-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  .menu-btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
  }

  .category-btn {
    background-color: transparent;
    color: #000;
    border: 1px solid #ebebeb;
    margin: 0 0.8rem;
    padding: 8px 16px;
    border-radius: 10rem;
    text-transform: capitalize;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .category-btn:hover {
    background-color: var(--themeClr);
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    .menu-items-wrapper {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    .menu-item {
      flex: 0 0 calc(25%);
    }
  }
`;

export default CategoryPage;
