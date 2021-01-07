async function getRestrooms(lat, lng)
{
    let url = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat='+lat+'&lng='+lng;
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
}

async function getCrime(lat, lng, month) // All strings btw
{
    let url = 'https://data.police.uk/api/crimes-at-location?date=2020-'+month+'&lat='+lat+'&lng='+lng
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
}