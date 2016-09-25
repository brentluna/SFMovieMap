import React from 'react';
import MarkerManager from '../../util/marker_manager';


const mapOptions = {
  center: {lat: 37.773972, lng: -122.431297},
  zoom: 12
};

class Map extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.movies);
  }

  render() {
    return (
      <div className='map' ref='map'>Map</div>
    );
  }
}

export default Map;
