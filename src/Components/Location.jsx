
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Location = ({ title, desc }) => {
  return (
    <Wrapper className='section'>
      <section>
        <div className='location-div'>
          <div className='location-div-center'>
            <div className='location-wrap'>
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
            <div className='location-wrap location-links'>
              <Link to='/' className='location-pr'>
                Home /{' '}
              </Link>
              <p className='location-current'>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .location-div {
    background-color: #f2e8cf;
    padding: 10px 0;
    margin-top: 2rem;
  }

  .location-div-center {
    max-width: 80vw;
    margin: 4.5rem auto;
    text-align: center;
  }

  .location-links {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .location-wrap p {
    text-transform: capitalize;
    padding: 6px 0;
    color: grey;
  }

  .location-wrap h1 {
    font-weight: 600;
  }

  .location-current {
    font-size: 1.4rem !important;
    color: red !important;
  }

  .location-pr {
    color: #000;
    font-size: 1.4rem;
  }

  @media screen and (min-width: 768px) {
    .location-div-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
    }
    .location-wrap p {
      padding: 0;
      font-size: 1.1rem;
    }
    .location-wrap h1 {
      font-size: 1.8rem;
    }
  }
`;

export default Location;
