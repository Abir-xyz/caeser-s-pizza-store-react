import Navbar from '../Components/SubNav';
import Cart from '../Components/Cart';
import Footer from '../Components/Footer';
import Location from '../Components/Location';

const CategoryPage = () => {
  return (
    <section className='menu-container'>
      <div className='menu-nav'>
        <Navbar />
      </div>
      <div className='menu-location'>
        <Location
          title={'Menu'}
          desc={'We got everything that your heart desires!'}
        />
      </div>
      <div className='menu-contents'></div>
      <div className='menu-footer'>
        <Footer />
      </div>
      <Cart />
    </section>
  );
};
export default CategoryPage;
