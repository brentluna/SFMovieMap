import {connect} from 'react-redux';
import Map from './map';

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
