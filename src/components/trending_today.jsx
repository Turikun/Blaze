// import poster from "../assets/LPoster.png";
import { useState, useEffect, useRef } from "react";
import { trending } from "../api/api";

function Trending() {

  const [trendingseries, settrendingseries] = useState([]);

  const [showleft, setshowleft] = useState(false);

  const [showright, setshowright] = useState(true);

  const slider = useRef(null);

  const scrollleft = () => {
    slider.current.scrollBy({
      left: -500,
      behavior: 'smooth'
    });
    setshowright(true);
    setTimeout(() => {
      if (slider.current.scrollLeft <= 0) {
        setshowleft(false);
      }
    }, 500);
  };

  const scrollright = () => {
    slider.current.scrollBy({
      left: 500,
      behavior: 'smooth'
    });
    setshowleft(true);
    setTimeout(() => {
      if (slider.current.scrollLeft + slider.current.clientWidth >= slider.current.scrollWidth) {
        setshowright(false);
      }
    }, 500);
  };

  useEffect(() => {
    trending().then(data => {
      settrendingseries(data);
    })
  }, []);

  return (
    <div className="p-5 mx-18">
      <div className="text-2xl font-bold p-7 flex items-center gap-2 text-white">
        <div className="w-1 h-6 bg-red-600 space-x-1"></div>
        Trending Series
      </div>
      <div className="relative">
        {showleft && (
          <button className="absolute top-0 hover:bg-black/80 left-0 h-full text-white font-extralight text-6xl p-2 duration-200" onClick={scrollleft}>{`<`}</button>
        )}

        <div ref={slider} className="flex overflow-x-hidden">
          {trendingseries.slice(0, 10).map(series => (
            <div key={series.id} className="shrink-0">

              <div className="w-[42vh] h-[26vh] rounded-lg overflow-hidden mx-7">
                <img src={series.backdrop_path ? `https://image.tmdb.org/t/p/w500${series.backdrop_path}` : "/default-backdrop.png"}
                  alt={series.name}
                  className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-2 mx-6">
                <div className="text-white font-semibold">
                  {series.name || series.title}
                </div>
                <div className="text-gray-400">
                  ⭐ {series.vote_average?.toFixed(1)}
                  {" | "}
                  {series.first_air_date?.substring(0, 4)}
                  {" | Series"}
                </div>
              </div>
            </div>
          ))}
          {showright && (
            <button className="absolute top-0 hover:bg-black/80 right-0 h-full text-white font-extralight text-6xl p-2 duration-200" onClick={scrollright}>{`>`}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trending;
