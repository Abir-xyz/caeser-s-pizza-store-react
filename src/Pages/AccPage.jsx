import '../Css/account.css';
import Cart from '../Components/Cart.jsx';
import SubNav from '../Components/SubNav.jsx';
import Location from '../Components/Location.jsx';
import ClientForm from '../Components/ClientForm.jsx';
import Footer from '../Components/Footer.jsx';
import AuthInfo from './AuthInfo.jsx';

const AccPage = () => {
  return (
    <>
      <section className='acc-container'>
        <SubNav />
        <Location
          title={'Account'}
          desc={'Connect Your Account for more updates'}
        />
        <Cart />
        <AuthInfo />
        <ClientForm />
        <div className='auth-div'>
          <div className='auth-div-center'></div>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default AccPage;
