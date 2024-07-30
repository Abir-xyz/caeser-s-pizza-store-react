import { Link } from 'react-router-dom';
import '../Css/subNav.css';
import { useEffect, useState } from 'react';
import { useCartContext } from '../Context/CartContexts';
import UserAccount from './UserAccount';
import Cart from './Cart';

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
                <Link to='/menu' className='subNav-link'>
                  Menu
                </Link>
                <Link to='/account' className='subNav-link'>
                  Account
                </Link>
                <Link to='/about' className='subNav-link'>
                  About Us
                </Link>
                <Link to='/contact' className='subNav-link'>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SubNav;
