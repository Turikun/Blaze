import { useState, useEffect, useRef } from "react";
import { top10 } from "../api/api";

function Top10() {
  const [movies, setMovies] = useState([]);

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
    }, 500)
  };

  useEffect(() => {

    top10().then(data => {
      setMovies(data);

    });
  }, []);

  return (
    <div className="p-5 mx-18">
      <div className="text-2xl font-bold p-7 flex items-center gap-2 text-white">
        <div className="w-1 h-6 bg-red-600 space-x-1"></div>
        TOP 10 Today
      </div>
      <div className="relative">
        {showleft && (
          <button onClick={scrollleft} className="absolute left-0 top-0 hover:bg-black/80 transition-colors duration-200 text-white text-6xl h-full p-2 font-extralight">
            {"<"}
          </button>
        )}

        <div className="flex overflow-x-hidden" ref={slider}>
          {movies.slice(0, 10).map(movie => (
            <div key={movie.id} className="shrink-0">

              <div className="w-[27vh] h-[40vh] rounded-lg overflow-hidden mx-7">
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/path/to/default-poster.jpg"}
                  alt="Movie Poster"
                  className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-2 mx-6">
                <div className="text-white font-semibold">
                  {movie.title || movie.name}
                </div>
                <div className="text-gray-400">
                  ⭐ {movie.vote_average?.toFixed(1)}
                  {" | "}
                  {movie.release_date?.substring(0, 4)}
                  {" | Movie"}
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

export default Top10;
