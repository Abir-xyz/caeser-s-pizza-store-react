import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Home,
  Category,
  Acc,
  About,
  Contact,
  Error,
  CartPage,
} from './Pages/index';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='category' element={<Category />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='account' element={<Acc />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
