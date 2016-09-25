import {applyMiddleware} from 'redux';
import MovieMiddleware from './movie_middleware';
const RootMiddleware = applyMiddleware(
  MovieMiddleware
);

export default RootMiddleware;
