import { useState } from 'react';
import '../Css/Nav.css';
import '../Css/modal.css';
import navImage from '../pictures/pizza4.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContexts';
import UserAccount from './UserAccount';

const Nav = () => {
  // cart
  const { cartItems } = useCartContext();
  const { handleCartEnter } = useCartContext();
  // nav btn
  const [navEnter, setNavEnter] = useState(true);
  const [navExit, setNavExit] = useState(false);

  const handleModalEnter = () => {
    setNavEnter(false);
    setNavExit(true);
  };
  const handleModalExit = () => {
    setNavExit(false);
    setNavEnter(true);
  };

  const totalItems = cartItems.reduce((total, item) => {
    let quantity = item.quantity;
    total += quantity;
    return total;
  }, 0);

  return (
    <>
      <div className={`nav-modal ${navExit ? 'show-navModal' : ''} `}></div>
      <nav className='navbar' id='navbar'>
        {/* <!-- navabr center --> */}
        <div className='navbar-center'>
          {/* <!-- navbar brand --> */}
          <div className='navbar-brand'>
            <div className='navbar-left'>
              <a href={``} id='navbar-brand'>
                <span className='navbar-logo-text'>Caesar's</span>
                <span className='navbar-logo'>
                  <i className='fa-solid fa-pizza-slice'></i>
                </span>
              </a>
            </div>
            {/* ---- cart ----  */}
            <div className='navbar-right'>
              <div className={`cart-wrapper`} onClick={handleCartEnter}>
                <span className={`navbar-cart`}>
                  <i className='fa-solid fa-cart-shopping'></i>
                </span>
                <div className='cart-count'>
                  <p className='update-cart-count'>{totalItems}</p>
                </div>
              </div>
              {/* account */}
              <div className='home-acc'>
                {' '}
                <UserAccount />
              </div>
              {/* ----- */}
              <div className='navbar-toggler-container'>
                <button
                  className={`navbar-toggler navEnter ${
                    navEnter ? 'show-toggler' : 'hide-toggler'
                  }`}
                  onClick={handleModalEnter}
                >
                  <span className='navbar-toggler-text'></span>
                  <span className={`navbar-toggler-btn`}>
                    <i className='fa-solid fa-bars-staggered'></i>
                  </span>
                </button>
                <button
                  className={`navbar-toggler-exit navExit ${
                    navExit ? 'show-toggler' : 'hide-toggler'
                  } `}
                  onClick={handleModalExit}
                >
                  <span className='navbar-toggler-text'></span>
                  <span className={`navbar-toggler nav-exit`}>
                    <i className='fa-solid fa-xmark'></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- MOdal --> */}
          <div
            className={`navbar-links-wrapper ${
              navExit ? 'show-navLinks' : ''
            } `}
          >
            {/* <!-- center --> */}
            <div className='navbar-modal-center'>
              <div className='nav_links'>
                <ul className='navbar-ul'>
                  <li className='navbar-li'>
                    <Link to='menu' className='navbar-link'>
                      Menu
                    </Link>
                  </li>
                  <li className='navbar-li'>
                    <Link to='account' className='navbar-link'>
                      Account
                    </Link>
                  </li>
                  <li className='navbar-li'>
                    <Link to='about' className='navbar-link'>
                      About us
                    </Link>
                  </li>
                  <li className='navbar-li'>
                    <Link to='contact' className='navbar-link'>
                      contact us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='link-img-wrapper'>
                <img
                  src={navImage}
                  className='link-pizza animate__animated animate__pulse'
                />
              </div>
            </div>
            <div className='modal-social-wrapper'>
              <div className='modal-social'>
                <ul className='modal-ul'>
                  <li className='modal-li'>
                    <a
                      href='https://www.facebook.com/'
                      className='modal-li-link'
                      target='_0'
                    >
                      facebook
                    </a>
                  </li>
                  <li className='modal-li'>
                    <a href='#' className='modal-li-link'>
                      instagram{' '}
                    </a>
                  </li>
                  <li className='modal-li'>
                    <p>caeserspizza@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
