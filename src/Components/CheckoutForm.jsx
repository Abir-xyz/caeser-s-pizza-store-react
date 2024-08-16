import styled from 'styled-components';

const CheckoutForm = () => {
  return (
    <Wrapper className='section'>
      <section className='contact-section'>
        <div className='contact-intro'>
          <h2 className='contact-title'>Billing Address</h2>
        </div>
        <div className='contact-form'>
          <div className='form-group-container'>
            <div className='form-group'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                id='name'
                name='name'
                className='form-input'
                placeholder='Your name'
                type='text'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                id='email'
                name='email'
                className='form-input'
                placeholder='Your email'
                type='email'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone' className='form-label'>
                Phone
              </label>
              <input
                id='phone'
                name='phone'
                className='form-input'
                placeholder='+1 (234) 56789'
                type='text'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone' className='form-label'>
                Town/City
              </label>
              <input
                id='city'
                name='city'
                className='form-input'
                type='text'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone' className='form-label'>
                Street Address
              </label>
              <input
                id='street'
                name='street'
                className='form-input'
                type='text'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone' className='form-label'>
                Postcode/Zip
              </label>
              <input
                id='zip'
                name='zip'
                className='form-input'
                type='text'
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message' className='form-label'>
                Order Notes
              </label>
              <textarea
                className='form-textarea'
                id='message'
                name='message'
                placeholder='Your message'
                required
              ></textarea>
            </div>
          </div>
          {/* <button className='form-submit' type='submit'>
            Send Message
          </button> */}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-section {
    width: 100%;
    max-width: 50rem;
  }

  .contact-title {
    font-size: 1.6;
    font-weight: 600;
  }

  .contact-description {
    margin-bottom: 20px;
    color: rgb(107 114 128);
  }

  .form-group-container {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-label {
    margin-bottom: 0.5rem;
  }

  .form-input,
  .form-textarea {
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    display: flex;
    height: 2.5rem;
    width: 100%;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .form-input::placeholder,
  .form-textarea:focus-visible {
    color: #6b7280;
  }

  .form-input:focus-visible,
  .form-textarea:focus-visible {
    outline: 2px solid orange;
    outline-offset: 2px;
  }

  .form-textarea {
    min-height: 120px;
  }

  .form-submit {
    width: 100%;
    font-size: 1.1rem;
    margin-top: 1.2rem;
    background-color: orange;
    color: #fff;
    padding: 13px 5px;
    border-radius: 0.375rem;
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .form-submit:hover {
    background-color: #c28616;
  }

  .contact-form {
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    .contact-title {
      font-size: 1.6rem !important;
    }
  }
`;

export default CheckoutForm;
