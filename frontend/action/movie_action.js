export const MovieConstants = {
  RECEIVE_MOVIES: 'RECEIVE_MOVIES',
  FETCH_MOVIES: 'FETCH_MOVIES'
};

export const receiveMovies = movies => ({
  type: MovieConstants.RECEIVE_MOVIES,
  movies
});

export const fetchMovies = data => ({
  type: MovieConstants.FETCH_MOVIES,
  data
});
