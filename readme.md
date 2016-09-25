## San Francisco Movie App

### How It's Built

Rails:
 I decided to use rails, mostly out of familiarity. I wasn't planning on keeping a local database, and thought using rails might be overkill for this project, as the main purpose it would serve would be my server. I wanted to give Node Express a shot isntead of rails, but unfortunately was limited on what time I had available this weekend, so decided to use rails so I could get it up and running quickly, as I wasn't sure how much time it would take to get express going.

JS/React/Redux:
 I React components in a redux pattern to handle most of the app. The redux cycle is for the 'movies' state, that is returned via an API call to the SFMovie DB. That API call is a result of the search bar.  

API:
I wasn't sure how exactly you wanted to the results to be filtered by the search, if you wanted a specific criteria, like location, or for it to be able to search for any matchign paramater. I decided to go with a universal search of the Movie DB just to be safe. The API response is stored in the Stores 'movies' state.

I did use jQuery for my api calls. I did think it to be a bit of a heavy library to use striclty for api calls, and considered trying to use Fetch or Axios, but since I didn't have any experience with them and time was limited, I decided to stick with jquery.

Map:
I only had minimal experience with the Google maps api on the BenchBnB project, so I had to spend some time refereshing on how to use the API. In order to convert the generic "location" names that the Database provided into appropriate Latitude and Longitudes that the maps markers require, I used a google api that returns a location based generic 'places' names.

Unfortunately some locations in the DB will not return valid lat/lng results from the google api, and therefore will not have markers.

I updated my markers in componentDidUpdate, in order to get the markers auto updating as my search params changed. You can click on the markers to get the movie appropriate movie info. I used a NPM package called OverlappingMarkerSpiderfier, to allow a spiderweb spread of overlapping markers, so you can select them individually easier.



### Up and Running

It's a basic rails app using postgresql.
-bundle install
-rails s
-localhost:3000
