import $ from 'jquery';

export const fetchLatLng = (data, success) => {
  return (
  $.ajax({
    method: 'get', url:`https://maps.googleapis.com/maps/api/geocode/json?address=${data}&bounds=37.809608,-122.527298|37.611363,-122.302113&key=AIzaSyDmRqXGfoJQHUeculXYUBZNWUrjm2LLiC0`,
    success,
    error: () => console.log('error in fetchLatLng')
  })
);
};

export const fetchMovies = (data, success) => (
  $.ajax({
    method: 'get',
    url: `https://data.sfgov.org/resource/wwmu-gmzc.json?$q=${data}`,
    success,
    error: () => console.log('error in fetchMovies')
  })
);
