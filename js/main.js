/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.



var mymap = L.map('map-container').setView([46.852886, -121.760374], 7);
// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:

var osm = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";

L.tileLayer(osm).addTo(mymap);
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
