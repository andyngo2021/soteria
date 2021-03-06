var mymap = L.map('mapid', {layers: MQ.mapLayer()}).setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1
}).addTo(mymap);

let reduce = 15;


// Refreshes page on map drag
mymap.on("dragend", function(e) {
    let ctr = mymap.getCenter();
    _lat = ctr['lat'];
    _lng = ctr['lng'];
    if (document.getElementById("restroom-cb").checked && document.getElementById("crime-cb").checked) reloadMarkers();
    UNPLOTALL();
    all_restrooms.splice(0, Math.ceil(all_restrooms.length/reduce));
    all_refuges.splice(0, Math.ceil(all_refuges.length/reduce));
    all_crimes.splice(0, Math.ceil(all_crimes.length/reduce));
});

function reloadMarkers()
{
    UNPLOTALL();
    generateCrimes();
    generateRestrooms();
    replot();
}

function UNPLOTALL()
{
    for (let j=0; j<Math.ceil(all_restrooms.length/reduce); j++)
    {
        mymap.removeLayer(all_restrooms[j]); 
    }
    // Gender neutral
    for (let i=0; i<Math.ceil(all_refuges.length/reduce); i++)
    {
        mymap.removeLayer(all_refuges[i]);
    } 
    for (let i=0; i<Math.ceil(all_crimes.length/reduce); i++)
    {
        mymap.removeLayer(all_crimes[i]);
    }

}

function replot()
{
    plotCrimes();
    plotRestrooms();
}

function plotCrimes()
{
    for (let i=0; i<all_crimes.length; i++)
    {
        all_crimes[i].addTo(mymap);
    }
}

function plotRestrooms()
{
    // Non-gender neutral
    for (let j=0; j<all_restrooms.length; j++)
    {
        all_restrooms[j].addTo(mymap);
    }
    // Gender neutral
    for (let i=0; i<all_refuges.length; i++)
    {
        all_refuges[i].addTo(mymap);
    }      
}

// When checkbox for restroom is toggled
function onRRchangeCB()
{
    let check = document.getElementById("restroom-cb").checked;
    // draw
    if (check)
    {
        plotRestrooms();
    }
    // then remove
    else
    {
        // Non-gender neutral
        for (let j=0; j<all_restrooms.length; j++)
        {
            mymap.removeLayer(all_restrooms[j]); 
        }
        // Gender neutral
        for (let i=0; i<all_refuges.length; i++)
        {
            mymap.removeLayer(all_refuges[i]);
        }      
    }
}

function onCchangeCB()
{
    let check = document.getElementById("crime-cb").checked;
    if (check)
    {
        plotCrimes();
    }
    else
    {
        for (let i=0; i<all_crimes.length; i++)
        {
            mymap.removeLayer(all_crimes[i]);
        }
    }
}

var popup = L.popup();