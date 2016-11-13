const locationFromPlaceId = require('./location_from_place_id');
const nearbyPlacesToLocation = require('./nearby_places_to_location');


const locationData = location =>
  Promise.all([
    Promise.resolve(location),
    nearbyPlacesToLocation(location)]);

// placesInLocality :: string -> Promise [Object] Error
const placesInLocality = placeId =>
  locationFromPlaceId(placeId)
  .then(locationData)
  .then(([location, places]) => ({ location, places }));


module.exports = placesInLocality;
