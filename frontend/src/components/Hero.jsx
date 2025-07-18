import backV from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backV} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Empty for now as per your request */}
      </div>
    </div>
  );
};

export default Hero;
