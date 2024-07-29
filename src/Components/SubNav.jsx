import { Link } from 'react-router-dom';
import '../Css/subNav.css';
import { useState } from 'react';
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

  const handleEnter = () => {
    setEnter(true);
    setExit(true);
  };

  const handleExit = () => {
    setExit(false);
    setEnter(false);
  };

  const totalItems = cartItems.reduce((total, item) => {
    let quantity = item.quantity;
    total += quantity;
    return total;
  }, 0);

  return (
    <>
      <section className='subNav-container'>
        <div className='subNav-center'>
          <div className='subNav-brand'>
            <Link to='/' className='sub-brand'>
              Caeser's
            </Link>
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
              <Link to='/menu' className='subNav-link'>
                Menu
              </Link>
              <Link to='/orders' className='subNav-link'>
                Orders
              </Link>
              <Link to='/about' className='subNav-link'>
                About Us
              </Link>
              <Link to='/contact' className='subNav-link'>
                Contact Us
              </Link>
              {/* --------- cart ---------- */}
              <Link className={`cart-wrapper`} onClick={handleCartEnter}>
                <span className={`navbar-cart subNav-cart`}>
                  <i className='fa-solid fa-cart-shopping'></i>
                </span>
                <span className='cart-count subNav-count'>
                  <p>{totalItems}</p>
                </span>
              </Link>
              {/* --------- end of cart ---------- */}
              <Link className='subNav-link'>
                <UserAccount />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SubNav;
