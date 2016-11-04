/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
$(document).ready(function() {
  
  var osm = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";

  var darkLayer = L.tileLayer('https://api.mapbox.com/styles/v1/nhodge253/civ36hf7y000l2ipjhdb5bb6s/tiles/256/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,                         Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.mapbox-streets-v7',
    accessToken: 'pk.eyJ1IjoibmhvZGdlMjUzIiwiYSI6ImNpdXo1b3hxbzA0ZmEyb25vY2hqMnViY2cifQ.K7f2e2dNhyc-fZrnccA6IQ'
  });

  var satLayer = L.tileLayer('https://api.mapbox.com/styles/v1/nhodge253/ciuz67hze00kx2jqn2j6ysufc/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,                         Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.mapbox-terrain-v2',
    accessToken: 'pk.eyJ1IjoibmhvZGdlMjUzIiwiYSI6ImNpdXo1b3hxbzA0ZmEyb25vY2hqMnViY2cifQ.K7f2e2dNhyc-fZrnccA6IQ'
  });

  var mapLayers = {
        "Satellite": satLayer,
        "Night View": darkLayer,
        "OSM": osm
      }


var mymap = L.map('map-container').setView([46.852886, -121.760374], 7);
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:



L.tileLayer(osm).addTo(mymap);

L.control.layers(mapLayers).addTo(mymap);



var marker = L.marker([46.852886, -121.760374]).addTo(mymap);
marker.bindPopup("<b>Mt. Rainier</b>").openPopup();

// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)
var marker2 = L.marker([46.1095143,-122.2135499]).addTo(mymap);
marker2.bindPopup("<b>Ape Caves</b>").openPopup();

var marker3 = L.marker([46.1574536,-119.4778029]).addTo(mymap);
marker3.bindPopup("<b>Horse Heaven Hills Cemetary</b>").openPopup();

var marker4 = L.marker([46.9770499,-119.3574428]).addTo(mymap);
marker4.bindPopup("<b>Potholes State Park</b>").openPopup();
});
