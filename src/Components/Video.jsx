import video from '../videos/bg-1.mp4';

const Video = () => {
  return (
    <>
      <div className='video-container'>
        <video muted autoPlay loop className='video'>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      {/* <!-- noise wrapper --> */}
      <div className='action-wrapper'></div>
    </>
  );
};
export default Video;
