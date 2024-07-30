import MainForm from './MainForm';
import formImg from '../pictures/form-img.png';
import styled from 'styled-components';

const ClientForm = () => {
  return (
    <Wrapper className='section'>
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .client-form {
    max-width: 80vw;
    margin: 5rem auto;
  }

  .client-form-img {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    .client-form-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .client-form-item {
      flex: 0 0 calc(50% - 10px);
    }
    .client-form-img {
      max-width: 600px;
    }
  }
`;

export default ClientForm;
