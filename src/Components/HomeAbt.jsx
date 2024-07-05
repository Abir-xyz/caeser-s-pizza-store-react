import abtImg from '../pictures/5.png';
import '../Css/homeAbt.css';
import { Link } from 'react-router-dom';

const HomeAbt = () => {
  return (
    <section className='abt-container'>
      <div className='abt-center'>
        <div className='abt'>
          <h1>Quality is our pride</h1>
          <p>
            Welcome to Caesar's Pizza Shop! Since 2005, we've been a beloved
            fixture in downtown, known for our warm atmosphere and exceptional
            service. We craft our pizzas with the freshest
            ingredients—daily-made dough, premium mozzarella, vine-ripened
            tomatoes, and artisan meats. Whether you love classic Margherita or
            gourmet creations, our menu has something for everyone. Watch our
            skilled pizzaiolos at work in our open kitchen and enjoy a true
            pizza experience. At Caesar's, we’re more than just a pizza
            shop—we’re a place where delicious memories are made. Come and taste
            the difference!
          </p>
          <Link to='about' className='home-abtBtn'>
            Read More
          </Link>
        </div>
        <div className='abt'>
          <div className='abt-img-wrapper'>
            <img src={abtImg} className='abt-img' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeAbt;
