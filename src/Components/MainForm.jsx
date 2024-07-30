
import styled from 'styled-components';

const MainForm = () => {
  return (
    <Wrapper className='section'>
      <section className='main-form'>
        <div className='form-container'>
          <div className='form-wrapper'>
            <form className='form'>
              <div className='form-heading'>
                <h1>Get Your's Now!</h1>
              </div>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                required
              />
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                required
              />
              <input
                type='text'
                className='form-control'
                placeholder='Phone Number'
                required
              />
              <input
                type='text'
                className='form-control'
                placeholder='Address'
                required
              />
              <button type='submit' className='form-btn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form {
    max-width: 450px;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 12px 10px;
    border: 0.5px solid rgb(209, 209, 209);
    font-size: 1rem;
    border-radius: 5px;
    margin: 20px 0;
    outline: none;
  }

  .form-control:focus {
    border: 0.5px solid var(--themeClr);
  }

  .form-btn {
    font-size: 1.1rem;
    background: none;
    border: none;
    background-color: var(--themeClr);
    color: #fff;
    padding: 10px 26px;
    border-radius: 10rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-transform: uppercase;
  }

  .form-btn:hover {
    background-color: red;
  }

  .form-heading h1 {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    .form-heading h1 {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

export default MainForm;
