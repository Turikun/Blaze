const Base_Url = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {

    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

// This is for the top 10 movies of the day, you can change the endpoint to get different data

export async function top10() {
  const response = await fetch(`${Base_Url}/trending/movie/day?language=en-US`, options);
  const data = await response.json();

  return data.results;
}

// This is for the trending series of the day, you can change the endpoint to get different data

export async function trending() {
  const response = await fetch(`${Base_Url}/trending/tv/day?language=en-US`, options);
  const data = await response.json();

  return data.results;
}

// This is for the top rated shows, you can change the endpoint to get different data

export async function toprated() {
  const response = await fetch(`${Base_Url}/tv/top_rated?language=en-US`, options);
  const data = await response.json();

  return data.results;
}

// This is for the Comedy series, you can change the endpoint to get different data

export async function comedy() {
  const response = await fetch(`${Base_Url}/discover/tv?with_genres=35&language=en-US`, options);
  const data = await response.json();

  return data.results;
}
