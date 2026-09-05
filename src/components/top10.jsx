import { useState, useEffect } from "react";
import { top10 } from "../api/api";

function Top10() {
  const [movies, setMovies] = useState([]);

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
      <div className="flex gap-6 overflow-x-auto ">
        {movies.slice(0, 10).map(movie => (
          <div key={movie.id}>

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
    </div>
  );
}

export default Top10;
