import {connect} from 'react-redux';
import Search from './search';
import {fetchMovies} from '../action/movie_action';


const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: data => dispatch(fetchMovies(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
