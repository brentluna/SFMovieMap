import {combineReducers} from 'redux';
import MovieReducer from './movie_reducer';

const RootReducer = combineReducers({
  movies: MovieReducer
});

export default RootReducer;
