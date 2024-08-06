import styled from 'styled-components';
import SubNav from '../Components/SubNav';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <Wrapper className='section'>
      <div>
        <SubNav />
      </div>
      <div>
        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Contact;
