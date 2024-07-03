import { Link } from 'react-router-dom';
import '../Css/subNav.css';
import { useState } from 'react';
import { useCartContext } from '../Context/CartContexts';

const SubNav = () => {
  // cart ctrl
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
              <Link to='category' className='subNav-link'>
                Category
              </Link>
              <Link to='about' className='subNav-link'>
                About Us
              </Link>
              <Link to='contact' className='subNav-link'>
                Contact Us
              </Link>
              {/* --------- cart ---------- */}

              <Link className={`cart-wrapper`} onClick={handleCartEnter}>
                <span className={`navbar-cart subNav-cart`}>
                  <i className='fa-solid fa-cart-shopping'></i>
                </span>
                <span className='cart-count subNav-count'>
                  <p>0</p>
                </span>
              </Link>

              {/* --------- cart ---------- */}
              <Link to='acc' className='subNav-link'>
                <span>
                  <i className='fa-solid fa-user'></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SubNav;