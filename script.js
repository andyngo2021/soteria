let SF_lng = -122.4194;
let SF_lat = 37.7749;
let b_lng  = -122.2585; 
let b_lat = 37.8719;



// Actual Map Object
// https://openlayers.org/en/latest/doc/quickstart.html 
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
        source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.transform([SF_lng, SF_lat], 'EPSG:4326', 'EPSG:3857'),
        zoom: 10
    })
});