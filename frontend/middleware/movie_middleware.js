import {MovieConstants, receiveMovies} from '../action/movie_action';
import {fetchMovies} from '../util/map_api_util';


const MovieMiddleware = store => next => action => {
  
  switch (action.type) {
    case MovieConstants.FETCH_MOVIES:
      let success = data => store.dispatch(receiveMovies(data));
      fetchMovies(action.data, success);
      return next(action);
    default:
      return next(action);
  }
};

export default MovieMiddleware;
