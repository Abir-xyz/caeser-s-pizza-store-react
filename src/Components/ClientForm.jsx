import MainForm from './MainForm';
import '../Css/clientForm.css';
import formImg from '../pictures/form-img.png';

const ClientForm = () => {
  return (
    <section className='client-form'>
      <div className='client-form-center'>
        <div className='client-form-item'>
          <MainForm />
        </div>
        <div className='client-form-img-wrapper client-form-item'>
          <img src={formImg} className='client-form-img' />
        </div>
      </div>
    </section>
  );
};
export default ClientForm;
