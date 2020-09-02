//Auth.js
export const getSessionIdUrl = (API_KEY ,token) => {return `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}&request_token=${token}`}
export const getTokenUrl = (API_KEY) => {return `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`}
//MovieRoulette.js
export const getRandomMovieUrl = (API_KEY, genre) => {return `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genre}`}
//StarRating.js
export const getRatingUrl = (API_KEY, movieId, sessionId) => {return `https://api.themoviedb.org/3/movie/${movieId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`}
export const getPostRatingUrl = (API_KEY, movieId, sessionId) => {return `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`}
//MovieListPage.js
export const getMovieListUrl = (API_KEY) => {return `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`}
export const getMoreMoviesUrl = (API_KEY,apiMoviesPage) => {return `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${apiMoviesPage}`}
//SingleMoviePage.js
export const getSingleMovieUrl = (API_KEY,movieId) => {return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`}

export async function getData(url) {
  let res = await fetch(url);
  return res
    .json()
    .then((res) => {
      return res;
    })
    .catch((err) => alert(err));
}

export async function postData(url, item) {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(item),
  });
  return res
    .json()
    .then((data) => {
      return data;
    })
    .catch((err) => alert(err));
}
