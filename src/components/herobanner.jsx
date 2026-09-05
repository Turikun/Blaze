import bannerImg from '../assets/banner.png';

function Herobanner() {
  return (
    <div className="w-full h-[60vh] md:h-[75vh] overflow-hidden text-black">
      <img
        src={bannerImg}
        alt="Hero Banner"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

export default Herobanner;
