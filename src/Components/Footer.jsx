import { Link } from 'react-router-dom';
import googlePlay from '../pictures/plystr.png';
import appleStore from '../pictures/aplstr.png';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper className='section'>
      <section className='footer-container'>
        <div className='footer-center'>
          <div className='footer-item'>
            <ul className='footer-ul'>
              <li className='footer-li footer-item-title'>Caeser's Pizza</li>
              <li className='footer-li'>
                <Link to='/menu' className='footer-link'>
                  Menu
                </Link>
              </li>
              <li className='footer-li'>
                <Link to='/about' className='footer-link'>
                  About Us
                </Link>
              </li>
              <li className='footer-li'>
                <Link to='/contact' className='footer-link'>
                  Contact Us
                </Link>
              </li>
              <li className='footer-li'>
                <Link to='/account' className='footer-link'>
                  Account
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <ul className='footer-ul'>
              <li className='footer-li footer-item-title'>Useful Links</li>

              <li className='footer-li'>
                <Link className='footer-link'>Online orders</Link>
              </li>
              <li className='footer-li'>
                <Link className='footer-link'>Refunds</Link>
              </li>
              <li className='footer-li'>
                <Link className='footer-link'>Privacy Policy</Link>
              </li>
              <li className='footer-li'>
                <Link className='footer-link'>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <ul className='footer-ul'>
              <li className='footer-li footer-item-title'>Company</li>
              <li className='footer-li'>
                <Link className='footer-link'>Investors</Link>
              </li>
              <li className='footer-li'>
                <Link className='footer-link'>Donations</Link>
              </li>
              <li className='footer-li'>
                <Link className='footer-link'>Charity</Link>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <ul className='footer-ul '>
              <li className='footer-li footer-item-title'>Follow Us Here</li>
              <div className='footer-social-ul'>
                <li className='footer-li footer-social-first'>
                  <Link className='footer-link'>
                    <span>
                      <i className='fa-brands fa-facebook'></i>
                    </span>
                  </Link>
                </li>
                <li className='footer-li'>
                  <Link className='footer-link'>
                    <span>
                      <i className='fa-brands fa-instagram'></i>
                    </span>
                  </Link>
                </li>
                <li className='footer-li'>
                  <Link className='footer-link'>
                    <span>
                      <i className='fa-brands fa-twitter'></i>
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
            <ul className='footer-stores'>
              <li className='footer-str'>
                <Link className='footer-link'>
                  <img src={googlePlay} className='gplay-str' />
                </Link>
              </li>
              <li className='footer-str'>
                <Link className='footer-link'>
                  <img src={appleStore} className='apple-str' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-cr'>&copy;2024. All Rights Reserved.</div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer-container {
    background-color: #fffcf2;
  }

  .footer-center {
    max-width: 90vw;
    margin: 0 auto;
    padding: 30px 16px;
  }

  .footer-item-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .footer-li {
    margin: 8px 0;
  }

  .footer-link {
    color: #777;
    transition: all 0.5s ease-in-out;
  }

  .footer-link:hover {
    color: red;
  }

  .footer-social-ul {
    display: flex;
    align-items: center;
  }

  .footer-social-first {
    margin-left: 0 !important;
  }

  .footer-social-ul {
    margin: 20px 0;
  }

  .footer-social-ul > li {
    margin: 0 20px;
  }

  .footer-link span i {
    font-size: 2rem;
  }

  .footer-item {
    margin: 26px 0;
  }

  .footer-cr {
    text-align: center;
    background-color: #fff !important;
    padding: 10px 0;
  }

  @media screen and (min-width: 768px) {
    .footer-center {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
    .footer-item {
      height: 200px;
    }
  }
`;

export default Footer;
