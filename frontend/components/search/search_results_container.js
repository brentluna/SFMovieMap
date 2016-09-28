import {connect} from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = state => ({
	movies: state.movies
})


const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);