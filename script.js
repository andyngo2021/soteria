// API call example
async function goGetData()
{
    let resp = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await resp.json();
    console.log(data);
}

// API call to REFUGE to get restrooms
async function getRestrooms(lat, lng)
{
    let url = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat='+lat+'&lng='+lng;
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
}

// let all_crimes = [];
// // Use this function to call on getCrime to get all 12 months of 2020 crime
// function getAllCrimes(lat, lng)
// {
//     for (let i=1; i<=12; i++)
//     {
//         getCrime(_lat, _lng, i.toString());
//     }
//     console.log(all_crimes.length);
//     console.log(all_crimes);
// }

// API call to BikeWise to get reported thefts
async function getCrime(lat, lng, month) // All strings btw
{
    let url = 'https://data.police.uk/api/crimes-at-location?date=2020-'+month+'&lat='+lat+'&lng='+lng
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
}

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
        center: ol.proj.transform([_lng, _lat], 'EPSG:4326', 'EPSG:3857'),
        zoom: 10
    })
});