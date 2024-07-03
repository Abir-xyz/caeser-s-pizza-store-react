import { Link } from 'react-router-dom';
import '../Css/ErrorPage.css';
import SubNav from '../Components/SubNav';
import { Cart } from '../Components';

const ErrorPage = () => {
  return (
    <>
      <main className='error-main'>
        <SubNav />
        <div className='error-wrapper'>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <Link to='/' className='error-btn'>
            Back To Home
          </Link>
        </div>
        <Cart />
      </main>
    </>
  );
};
export default ErrorPage;