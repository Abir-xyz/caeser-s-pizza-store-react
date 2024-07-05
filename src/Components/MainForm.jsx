import '../Css/mainForm.css';

const MainForm = () => {
  return (
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
  );
};
export default MainForm;
