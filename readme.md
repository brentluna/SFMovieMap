## SF Film App
[Live Link](http://www.brentluna.com/sf_film_app/)

### Description 

This is an app that will allow a user to search for Movies that where made in San Francisco. As the user searches, it will autcomplete results and place markers on the map, that when clicked provide details about the movie. 

### Technologies 

- Rails
- JavaScript
- React.js 
- Redux.js 
- Goolg Geocode API 
- SF Data API 
- Google Maps API 
- Overlapping Marker Spiderfy

The app is built using React.js components, and I implemented a redux cycle for storing the results of the movie Search. When the user searches, it will query the SF Data API to find movies that match, whih then get added to my stores state. From there I update the Markers on the map, by first utilizing the Geocode API to convert the generic Location names that SF Data holds, into Latitude and Longitude coordinates, and creating markers with that Data. I utilized a package called Overlapping Marker Spiderfy, to spread out overlapping markers in a spiderweb fasion.


### Todo 

- Remove rails backend and either add a Node Express backend, or just host on github pages 
- Update UI 
- Add click handler no list results to open marker data


### Up and Running

It's a basic rails app using postgresql.
-bundle install
-rails s
-localhost:3000
