import React from 'react';
import MarkerManager from '../../util/marker_manager';


const mapOptions = {
  center: {lat: 37.773972, lng: -122.431297},
  zoom: 12, 
  styles: 
  [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#0a0a0a"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#0d0d0d"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":"21"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#353535"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"color":"#3b3b3b"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#0d0d0d"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#f9f9f9"},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#fffcfc"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":17}]}]
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
