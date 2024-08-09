import styled from 'styled-components';

const ContactForm = () => {
  return (
    <Wrapper className='section'>
      <section class='contact-section'>
        <div class='contact-intro'>
          <h2 class='contact-title'>Send a message</h2>
          <p class='contact-description'>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <form class='contact-form'>
          <div class='form-group-container'>
            <div class='form-group'>
              <label for='name' class='form-label'>
                Name
              </label>
              <input
                id='name'
                name='name'
                class='form-input'
                placeholder='Your name'
                type='text'
                required
              />
            </div>
            <div class='form-group'>
              <label for='email' class='form-label'>
                Email
              </label>
              <input
                id='email'
                name='email'
                class='form-input'
                placeholder='Your email'
                type='email'
                required
              />
            </div>
            <div class='form-group'>
              <label for='phone' class='form-label'>
                Phone
              </label>
              <input
                id='phone'
                name='phone'
                class='form-input'
                placeholder='+1 (234) 56789'
                type='text'
                required
              />
            </div>
            <div class='form-group'>
              <label for='message' class='form-label'>
                Message
              </label>
              <textarea
                class='form-textarea'
                id='message'
                name='message'
                placeholder='Your message'
                required
              ></textarea>
            </div>
          </div>
          <button class='form-submit' type='submit'>
            Send Message
          </button>
        </form>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-section {
    width: 100%;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem 1rem;
  }

  .contact-title {
    font-size: 2rem;
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
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    padding: 30px;
    border-radius: 10px;
  }

  @media screen and (max-width: 768px) {
    .contact-title {
      font-size: 1.6rem !important;
    }
  }
`;

export default ContactForm;
