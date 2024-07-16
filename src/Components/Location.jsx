import '../Css/location.css';
import { Link } from 'react-router-dom';

const Location = ({ title, desc }) => {
  return (
    <section>
      <div className='location-div'>
        <div className='location-div-center'>
          <div className='location-wrap'>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
          <div className='location-wrap location-links'>
            <Link to='/' className='location-pr'>
              Home /{' '}
            </Link>
            <p className='location-current'>{title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Location;
