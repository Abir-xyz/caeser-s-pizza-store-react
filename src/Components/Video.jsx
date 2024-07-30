import video from '../videos/bg-1.mp4';
import styled from 'styled-components';
import actionImg from '../pictures/action.png';

const Video = () => {
  return (
    <>
      <Wrapper className='section'>
        <div className='video-container'>
          <video muted autoPlay loop className='video'>
            <source src={video} type='video/mp4' />
          </video>
        </div>
        {/* <!-- noise wrapper --> */}
        <div className='action-wrapper'></div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
    filter: brightness(70%);
  }
  .action-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: url(${actionImg}) repeat 0 0;
    opacity: 0.4;
    -webkit-animation: action 0.2s steps(1) infinite;
    animation: action 0.2s steps(1) infinite;
    z-index: -1;
  }
  @keyframes action {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scaleX(-2);
    }
    50% {
      transform: scale(-1);
    }
    100% {
      transform: scaleY(-1);
    }
  }
`;

export default Video;
