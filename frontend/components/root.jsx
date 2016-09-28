import {Provider} from 'react-redux';
import React from 'react';
import MapContainer from './map/map_container';
import SearchContainer from './search_container';
import Navbar from './navbar/navbar';
import SearchResultsContainer from './search/search_results_container';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <Provider store={this.props.store}>
      <div>

        <Navbar />
        <div className='map-search'>
          <MapContainer />
          <SearchResultsContainer />
        </div>
      </div>
      </Provider>
    );
  }
}

export default Root;
