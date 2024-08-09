import styled from 'styled-components';
import SubNav from '../Components/SubNav';
import Footer from '../Components/Footer';
import Location from '../Components/Location';
import ContactForm from '../Components/ContactForm';
import picture from '../pictures/pizza4.png';

const Contact = () => {
  return (
    <Wrapper className='section'>
      <div>
        <SubNav />
      </div>
      <div>
        <Location title={'Contact'} desc={'No worries, we got you'} />
      </div>
      <section className='contact-contents'>
        <div className='form-center'>
          <ContactForm />
          <div className='img-wrapper'>
            <img src={picture} className='contact-img' />
          </div>
        </div>
        <div>
          {/* <div className='contact-details'>
            <div className='detail'>
              <p>
                <i class='fa-solid fa-location-dot'></i>
              </p>
              <p>Location</p>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className='detail'>
              <p>
                <i class='fa-solid fa-phone'></i>
              </p>
              <p>Call</p>
              <p>+1 (234) 56789</p>
            </div>
            <div className='detail'>
              <p>
                <i class='fa-solid fa-envelope'></i>
              </p>
              <p>Email</p>
              <p>caeserpizzastore@gmail.com</p>
            </div>
          </div> */}
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-contents {
    max-width: 90vw;
    margin: 3rem auto;
  }

  .contact-details {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
  }
  .detail {
    margin: 30px 0;
    flex: 0 0 calc(33.33% - 20px);
    text-align: center;
  }

  .detail p {
    font-size: 1.1rem;
    margin: 5px 0;
  }

  .detail p i {
    font-size: 2rem;
    color: #d45353;
  }

  .contact-img {
    width: 100%;
    max-width: 300px;
  }

  @media screen and (min-width: 768px) {
    .form-center {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .contact-img {
      max-width: 400px;
    }
  }

  @media screen and (max-width: 768px) {
    .contact-details {
      text-align: center;
      flex-direction: column;
    }
    .form-center .img-wrapper {
      text-align: center;
    }
    .contact-img {
      margin: 0 auto;
      max-width: 250px;
    }
  }
`;

export default Contact;
