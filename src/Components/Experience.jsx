import '../Css/experience.css';
import expImg from '../pictures/pizza1.png';

const Experience = () => {
  return (
    <>
      <section className='experience-wrapper'>
        <div className='exp-center'>
          <div className='exp-text-wrap exp-wrap'>
            <h1>
              Over 10 years of <span>experience</span>
            </h1>
            <p>
              Creating pizza entails skillfully blending fresh ingredients,
              expertly stretching dough, and mastering precise baking
              techniques.
            </p>
          </div>
          <div className='exp-wrap'>
            <img src={expImg} className='exp-img' />
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
