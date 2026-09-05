// import poster from "../assets/TPoster.png";
import { useState, useEffect, useRef } from "react";
import { toprated } from "../api/api";

function TopRated() {

  const [toprateds, settoprateds] = useState([]);

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
    toprated().then(data => {
      settoprateds(data);
    })
  }, []);

  return (
    <div className="p-5 mx-18">
      <div className="text-2xl font-bold p-7 flex items-center gap-2 text-white">
        <div className="w-1 h-6 bg-red-600 space-x-1"></div>
        TOP Rated

      </div>
      <div className="relative">
        {showleft && (
          <button onClick={scrollleft} className="absolute left-0 top-0 hover:bg-black/80 transition-colors duration-200 text-white text-6xl h-full p-2 font-extralight">
            {"<"}
          </button>
        )}
        <div className="flex overflow-x-hidden" ref={slider}>
          {toprateds.slice(0, 10).map(series => (
            <div key={series.id} className="shrink-0">

              <div className="w-[42vh] h-[26vh] rounded-lg overflow-hidden mx-7">
                <img src={series.backdrop_path ? `https://image.tmdb.org/t/p/w500${series.backdrop_path}` : null}
                  alt="Movie Poster"
                  className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-2 mx-6">
                <div className="text-white font-semibold">
                  {series.name || series.title}
                </div>
                <div className="text-gray-400">
                  ⭐ {series.vote_average?.toFixed(1)}
                  {" | "}
                  {series.first_air_date?.substring(0, 4) || series.release_date?.substring(0, 4)}
                  {" | Series"}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showright && (
          <button onClick={scrollright} className="absolute right-0 hover:bg-black/80 transition-colors duration-200 text-white top-0 text-6xl h-full p-2 font-extralight">
            {">"}
          </button>
        )}
      </div>
    </div>
  );
}

export default TopRated;
