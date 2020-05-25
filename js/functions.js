
var url = 'lineas.json';
var map = L.map('map').setView([21.161841457470665,-86.85121536254883], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

var  geojsonMarkerOptions = {
  'radius':9,
  'opacity': .5,
  'color': "orange",
  'fillColor':  "yellow",
  'fillOpacity': 0.8
};

  function forEachFeature(feature, layer) {
    var popupContent = feature.properties.Title;
			if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
			}
				layer.bindPopup(popupContent);
	};

  var covid = L.geoJSON(null, {
    onEachFeature: forEachFeature,
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    }
  });
    $.getJSON(url, function(data) {
      covid.addData(data);
  	});
  	covid.addTo(map);

    //Funcion para ver coordenadas con el puntero.
    var popup = L.popup();
    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("Has hecho click en la coordenada:<br> " +  e.latlng.lat.toString() + "," +  e.latlng.lng.toString())
        .openOn(map);
        console.log(e.latlng.lat.toString() + "," +  e.latlng.lng.toString());
    }
    map.on('click', onMapClick);
