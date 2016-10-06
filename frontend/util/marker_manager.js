import {fetchLatLng} from './map_api_util';
import OverlappingMarkerSpiderfier from 'overlapping-marker-spiderfier';


class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.createMarker = this.createMarker.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
    this.removeMarkers = this.removeMarkers.bind(this);
    this.createContent = this.createContent.bind(this);
    this.oms = new OverlappingMarkerSpiderfier(this.map, {legWeight: 3});
    this.iw = new google.maps.InfoWindow();
    this.oms.addListener('click', (mark, event) => {
      this.iw.setContent(this.createContent(mark));
      this.iw.open(this.map, mark);
    });
  }


  updateMarkers(movies) {
    this.movies = movies;
    this.removeMarkers();
    this.movies.forEach(movie => this.createMarker(movie));
  }



  removeMarkers() {
    this.markers.forEach(marker => {
      marker.setMap(null);
    });
    this.markers = [];
  }

  createContent(movie) {
    return(
      `<div>
        <h4>${movie.title}</h4>
        <p>Actors: ${movie.actor_1}, ${movie.actor_2}, ${movie.actor_3}</p>
        <p>Director: ${movie.director}</p>
        <p>Year: ${movie.release_year}</p>
        <p>Location: ${movie.locations}</p>
      </div>`

    );
  }

  createMarker(movie) {
    let movieLoc = movie.locations;
    if (movieLoc.indexOf(' from ')) {
      movieLoc = movieLoc.split(' from')[0];
    }

    fetchLatLng(`${movieLoc}, San Francisco, CA`, res => {

      if (res.results.length) {
        const latLng = res.results[0].geometry.location;


        let marker = new google.maps.Marker({
          map: this.map,
          title: movie.title,
          director: movie.director,
          actor_1: movie.actor_1,
          actor_2: movie.actor_2,
          actor_3: movie.actor_3,
          release_year: movie.release_year,
          locations: movie.locations,
          position: latLng,
          movieLocs: movie.locations
        });

     this.oms.addMarker(marker);
        this.markers.push(marker);
      }
    });
  }



  removeMarker(marker) {
    const idx = this.markers.indexOf(marker);
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

}

export default MarkerManager;
