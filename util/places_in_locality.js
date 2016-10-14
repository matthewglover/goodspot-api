const locationFromPlaceId = require('./location_from_place_id');
const nearbyPlacesToLocation = require('./nearby_places_to_location');
const trace = require('./trace');


// placesInLocality :: string -> Promise [Object] Error
const placesInLocality = placeId =>
  locationFromPlaceId(placeId)
  .then(nearbyPlacesToLocation)
  .then(trace('placesInLocality results:'));


module.exports = placesInLocality;
