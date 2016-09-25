import {Provider} from 'react-redux';
import React from 'react';
import MapContainer from './map/map_container';
import SearchContainer from './search_container';


class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <Provider store={this.props.store}>
      <div>

        <h1>San Francisco Movies</h1>
        <div className='map-search'>
          <MapContainer />
          <SearchContainer />
        </div>
      </div>
      </Provider>
    );
  }
}

export default Root;
