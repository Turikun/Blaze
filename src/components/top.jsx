// import poster from "../assets/TPoster.png";
import { useState, useEffect } from "react";
import { toprated } from "../api/api";

function TopRated() {

  const [toprateds, settoprateds] = useState([]);

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
      <div className="flex gap-6 overflow-x-auto">
        {toprateds.slice(0, 10).map(series => (
          <div key={series.id}>

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
    </div>
  );
}

export default TopRated;
