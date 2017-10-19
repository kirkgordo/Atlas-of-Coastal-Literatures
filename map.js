var map = L.map('map',{ zoomControl: false }).setView([31.305,1.497], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/kirkgordo/cj7v2y2lq2p5i2snvk5c5xteh/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2lya2dvcmRvIiwiYSI6ImNqNzB1OXkzNjAwanIzMW81ajFhMXRpaDUifQ.sr3-WiOpg6rn47rzu8DgSw', {
  attribution: 'Map data &copy; OpenStreetMap contributors',
  maxZoom: 18,
  minZoom: 2,
}).addTo(map);

L.control.zoom({position: 'topright'}).addTo(map);      //moves zoom plus/minus buttons to different place

//ADD GEOJSON FILE

//create a stylized circle marker
var circle = {
  radius: 9,
  fillColor: "#d3d3d3",
  color: "#d3d3d3",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.7
};

L.geoJson(beachreadslist, {
  pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, circle);
  },
  onEachFeature: function(feature, layer) {
      layer.bindPopup("<div class='popup-body'><div class='popup-left'><div class='bookcover'><img src='" + feature.properties.imageURL + "'></img></div></div><div class = 'popup-right'><h2 class='booktitle'>" + feature.properties.book + "</h2><h3 class='author'>" + feature.properties.author + "</h3><p class='summary'>" + feature.properties.summary + "</p></div></div>");
  }
}).addTo(map);
