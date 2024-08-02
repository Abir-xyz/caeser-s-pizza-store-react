import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCartContext } from '../Context/CartContexts';
import UserAccount from './UserAccount';
import styled from 'styled-components';

const SubNav = () => {
  // cart ctrl
  const { cartItems } = useCartContext();
  const { handleCartEnter } = useCartContext();
  // toggler
  const [enter, setEnter] = useState(false);
  const [exit, setExit] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

  const handleEnter = () => {
    setEnter(true);
    setExit(true);
  };

  const handleExit = () => {
    setExit(false);
    setEnter(false);
  };

  // get cart total count
  const totalItems = cartItems.reduce((total, item) => {
    let quantity = item.quantity;
    total += quantity;
    return total;
  }, 0);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // fixed nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Wrapper className='section'>
        <section className={`subNav-container ${isFixed ? 'fixed-nav' : ''} `}>
          <div className={`subNav-center`}>
            <div className='subNav-brand'>
              <div>
                <Link to='/' className='sub-brand'>
                  Caeser's
                </Link>
              </div>
              {/* cart & acc */}
              <div className='subUser-acc-max'>
                <Link className={`cart-wrapper`} onClick={handleCartEnter}>
                  <span className={`navbar-cart subNav-cart`}>
                    <i className='fa-solid fa-cart-shopping'></i>
                  </span>
                  <span className='cart-count subNav-count'>
                    <p>{totalItems}</p>
                  </span>
                </Link>
                <Link className='subNav-link'>
                  <UserAccount />
                </Link>
              </div>
              {/* togglers */}
              <div className='subNav-toggler-wrapper'>
                <button
                  className={`subNav-enter ${
                    enter ? 'hide-toggle' : 'show-toggle'
                  }  `}
                  onClick={handleEnter}
                >
                  <span>
                    <i className='fa-solid fa-bars-staggered'></i>
                  </span>
                </button>
                <button
                  className={`subNav-exit ${
                    exit ? 'show-toggle' : 'hide-toggle'
                  }`}
                  onClick={handleExit}
                >
                  <span>
                    <i className='fa-solid fa-xmark'></i>
                  </span>
                </button>
              </div>
            </div>
            <div
              className={`subNav-links ${enter ? 'show-links' : 'hide-links'} `}
            >
              <div className={`subLinks-wrapper`}>
                <div className='sub-links-min'>
                  <NavLink
                    to='/menu'
                    className='subNav-link'
                    onClick={scrollToTop}
                  >
                    Menu
                  </NavLink>
                  <NavLink
                    to='/account'
                    className='subNav-link'
                    onClick={scrollToTop}
                  >
                    Account
                  </NavLink>
                  <NavLink
                    to='/about'
                    className='subNav-link'
                    onClick={scrollToTop}
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to='/contact'
                    className='subNav-link'
                    onClick={scrollToTop}
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .subNav-container {
    margin-top: 20px;
  }
  .subNav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 90vw;
    margin: 0 auto;
    position: relative;
  }
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
    background-color: #fff;
    margin-top: 0 !important;
    padding: 5px 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  .sub-brand {
    font-size: 2.4rem;
    font-weight: 600;
    color: #000;
  }
  .subNav-link {
    margin: 0 11px;
    color: #000;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .subNav-toggler-wrapper {
    display: flex;
    align-items: center;
  }
  .subNav-brand {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .subUser-acc-max {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
  }
  .subNav-enter,
  .subNav-exit {
    display: none;
    font-size: 1.4rem;
    background: none;
    border: none;
    cursor: pointer;
  }
  .subNav-links {
    height: auto !important;
    margin-right: 100px;
  }
  .subNav-enter {
    display: none !important;
  }
  .subLinks-wrapper {
    display: flex;
    align-items: center;
  }
  .cart-wrapper {
    position: relative;
    margin-right: 12px;
  }
  .cart-count {
    position: absolute;
    height: 15px;
    width: 15px;
    top: 10%;
    right: -18%;
  }
  .navbar-cart {
    font-size: 1.3rem;
  }
  .subNav-cart {
    color: #000;
  }
  .subNav-count {
    top: -10%;
  }
  .cart-count p {
    color: #fff;
    font-size: 0.7rem;
    background-color: red;
    border-radius: 50%;
    text-align: center;
  }
  /* responsive */

  @media screen and (max-width: 900px) {
    .subNav-enter {
      display: block !important;
    }
    .subNav-center {
      display: block;
    }
    .subLinks-wrapper {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      margin-top: 30px;
      align-items: first baseline;
    }
    .subNav-link {
      margin: 3px 0;
    }
    .subNav-links {
      height: 0 !important;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      margin-right: 0 !important;
    }
    .show-links {
      height: 200px !important;
      overflow: none !important;
    }
    .show-toggle {
      display: block !important;
    }

    .hide-toggle {
      display: none !important;
    }

    .hide-links {
      height: 0 !important;
      overflow: none;
    }

    .sub-links-min {
      display: flex;
      flex-direction: column;
    }

    .subUser-acc-max {
      margin-right: 40px;
    }
    .subUser-acc-max > .cart-wrapper {
      margin-right: 20px;
    }
  }
  .sub-links-min a.active {
    color: red;
  }

  @media screen and (max-width: 600px) {
    .sub-brand {
      font-size: 1.6rem;
    }
  }
`;

export default SubNav;
