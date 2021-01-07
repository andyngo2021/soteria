

var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1
}).addTo(mymap);

let ico = L.marker([51.5, -0.09], {icon: crimeIcon}).bindPopup("<b>Theft</b><br/>Short Description here");
ico.addTo(mymap);
L.marker([51.51, -0.091], {icon: restroomIcon}).addTo(mymap).bindPopup("<b>Restroom</b><br/>Short Description here");
L.marker([51.49, -0.089], {icon: refugeIcon}).addTo(mymap).bindPopup("<b>LGBTQ-friendly Restroom</b><br/>Short Description here");

//L.marker([51.5, -0.09]).addTo(mymap)
// .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

function plotCrimes()
{
    for (let i=0; i<all_crimes.length; i++)
    {
        all_crimes[i].addTo(mymap);
    }
}


var popup = L.popup();
