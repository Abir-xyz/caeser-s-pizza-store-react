import '../Css/footer.css';
import { Link } from 'react-router-dom';
import googlePlay from '../pictures/plystr.png';
import appleStore from '../pictures/aplstr.png';

const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='footer-center'>
        <div className='footer-item'>
          <ul className='footer-ul'>
            <li className='footer-li footer-item-title'>Caeser's Pizza</li>
            <li className='footer-li'>
              <Link to='/category' className='footer-link'>
                Menu
              </Link>
            </li>
            <li className='footer-li'>
              <Link to='/order' className='footer-link'>
                Order Now
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
  );
};
export default Footer;
