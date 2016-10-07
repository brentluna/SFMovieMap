import {MovieConstants, receiveMovies} from '../action/movie_action';
import {fetchMovies, fetchOMD} from '../util/map_api_util';


const MovieMiddleware = store => next => action => {
  
  switch (action.type) {
    case MovieConstants.FETCH_MOVIES:
      // let success = data => store.dispatch(receiveMovies(data));
      let success = data => {
      	const length = data.length; 
      	let counter = 0;
      	let finalData = [];

      	data.forEach(datum => {
					fetchOMD({yr: datum.release_year, title: datum.title}, res => {
						counter++;

						let newData = datum;
						newData['poster'] = res.Poster;
						newData['plot'] = res.Plot;
						finalData.push(newData);
						if (counter === length) {
							store.dispatch(receiveMovies(finalData));
						}
					})      		
      	})

      }
      fetchMovies(action.data, success);
      return next(action);
    default:
      return next(action);
  }
};

export default MovieMiddleware;
