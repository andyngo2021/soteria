/*
https://leafletjs.com/examples/custom-icons/ 
Example to follow as a guide:

var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);


-----
Class inheritance example:

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});

var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'})
*/

var icon_template = L.Icon.extend({
    options: {
        shadowUrl: 'assets/empty.png',
        iconSize: [30, 30],
        shadowSize: [0, 0],
        iconAnchor: [15, 15],
        shadowAnchor: [0, 0],
        popupAnchor: [-3, -30]
    }
});

var crimeIcon = new icon_template({iconUrl: 'assets/crime.png'});

var restroomIcon = new icon_template({iconUrl: 'assets/droplet.png'});

var refugeIcon = new icon_template({iconUrl: 'assets/droplet2.png'});

