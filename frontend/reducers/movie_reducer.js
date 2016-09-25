import {MovieConstants} from '../action/movie_action';


const MovieReducer = (state = [], action) => {
  switch (action.type) {
    case MovieConstants.RECEIVE_MOVIES:
      return [...action.movies];

    default:
      return state;
  }
};


export default MovieReducer;
