import { useState } from 'react';
import navImage from '../pictures/pizza4.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContexts';
import UserAccount from './UserAccount';
import styled from 'styled-components';

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
      <Wrapper className='section'>
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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .navbar {
    max-width: 90vw;
    margin: 0 auto;
    padding-top: 20px;
  }

  /* navbar left */

  #navbar-brand {
    font-size: 2.4rem;
    font-weight: 700;
  }
  .navbar-logo {
    color: var(--clrPizza);
  }
  .navbar-logo-text {
    color: var(--clrWhite);
  }

  /* navbar right */

  .navbar-right {
    display: flex;
    align-items: center;
  }

  .navbar-cart {
    font-size: 1.3rem;
    color: var(--clrWhite);
  }

  .cart-wrapper {
    margin-right: 12px;
    position: relative;
    cursor: pointer;
  }

  .cart-count {
    position: absolute;
    height: 15px;
    width: 15px;
    top: -8%;
    right: -18%;
  }

  .cart-count p {
    color: #fff;
    font-size: 0.7rem;
    background-color: red;
    border-radius: 50%;
    text-align: center;
  }

  .hide-cart {
    display: none;
  }

  .show-cart {
    display: block;
  }

  /* navbar toggler */

  .navbar-toggler {
    color: var(--clrWhite);
    font-size: 1.2rem;
  }

  .navbar-toggler-text {
    padding-right: 5px;
    color: var(--clrWhite);
    font-size: 1.2rem;
  }

  .navbar-toggler-exit {
    font-size: 1.2rem;
    color: var(--clrWhite);
    display: none;
  }

  .show-toggler {
    display: block;
  }

  .hide-toggler {
    display: none;
  }
  /* navbar links */

  .navbar-links-wrapper {
    display: none;
  }

  .navbar-modal-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .link-pizza {
    max-height: 400px;
  }

  .show-navLinks {
    display: block;
  }

  .navbar-link {
    color: var(--clrWhite);
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 500;
    padding: 10px 0;
    transition: all 0.2s ease;
  }

  .navbar-link:hover {
    color: var(--clrPizza);
    letter-spacing: 5px;
  }

  .navbar-ul {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    min-height: 80vh;
  }

  /* animation */

  .nav_links {
    animation: lefttoright 1s 1;
  }
  .link-img-wrapper {
    animation: righttoleft 1s 1;
  }
  .link-pizza {
    animation: infinite;
  }
  @keyframes lefttoright {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes righttoleft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  .navEnter,
  .navExit {
    background: none;
    border: none;
    cursor: pointer;
  }
  .home-acc button {
    color: #fff !important;
    margin: 0 10px;
  }

  @media screen and (max-width: 600px) {
    #navbar-brand {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
  // modal ---------------

  /* navbar modal */

  .nav-modal {
    min-height: 100vh;
    background-color: #111;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    transform: translateY(-100vh);
    transition: transform 0.4s ease-out;
  }

  .show-navModal {
    transform: translateY(0);
  }

  .hide-navModal {
    transform: translateY(-100vh);
  }

  /* ----- modal social */

  .modal-ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    animation: reveal 1s 1;
  }

  .modal-li-link i {
    font-size: 2rem;
    color: var(--clrWhite);
  }

  .modal-li p {
    text-decoration: underline;
    color: var(--clrWhite);
  }

  .modal-li {
    padding: 0 1rem;
  }

  .modal-li-link {
    color: var(--clrWhite);
    text-decoration: underline;
    transition: color 0.2s ease-in-out;
  }

  .modal-li-link:hover {
    color: var(--clrPizza);
  }

  .modal-li-last {
    text-decoration: none !important;
  }

  @keyframes reveal {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
  /* ------- navbar brand ------- */
  /* default */
  @media screen and (min-width: 1px) {
    .navbar-brand {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  /* at 768 */
  @media screen and (max-width: 768px) {
    .navbar-link {
      font-size: 1.3rem;
      font-weight: 400;
    }
    .navbar-li {
      padding: 3px 0;
    }
    .navbar-ul {
      display: block;
      min-height: auto;
    }
    .link-pizza {
      max-height: 100px;
    }
    .navbar-modal-center {
      min-height: 70vh;
      flex-direction: column;
      justify-content: center;
    }
    .nav_links {
      padding-bottom: 50px;
      text-align: center;
    }
    .modal-ul {
      /* justify-content: center; */
    }
    .modal-li {
      padding: 0 10px;
      margin: 5px 0;
    }
    #order-li {
      display: inline;
    }
    /* bg settings */
  }
`;

export default Nav;
