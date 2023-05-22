
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

const requests = {
   fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchtrailer: `&type=video&videoDefinition=high&key=${apiKey}`
};

export default requests;
