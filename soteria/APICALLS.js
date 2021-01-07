async function getRestrooms(lat, lng)
{
    let url = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?lat='+lat+'&lng='+lng;
    let resp = await fetch(url);
    let data = await resp.json();
    return data;
}

async function getCrime(lat, lng, month) // All strings btw
{
    let url = 'https://data.police.uk/api/crimes-at-location?date=2020-'+month+'&lat='+lat+'&lng='+lng
    let resp = await fetch(url);
    let data = await resp.json();
    for (let i=0; i<data.length; i++)
    {
        let tmp_crime = data[i];
        console.log(tmp_crime);
        let tmp_category = tmp_crime["category"];
        let tmp_lat = parseFloat(tmp_crime["location"]["latitude"]) + (Math.random()/5)*getRandom(-1, 1);
        let tmp_lng = parseFloat(tmp_crime["location"]["longitude"]) + (Math.random()/5)*getRandom(-1, 1);
        let tmp_desc = tmp_crime["location"]["street"]["name"];
        all_crimes.push(L.marker([tmp_lat, tmp_lng], {icon: crimeIcon}).bindPopup("<b>Crime</b><br/>"+"<b>"+tmp_category+"</b><br/>"+tmp_desc));
    }
}

// async function processCrimes(jsonfile)
// {
//     let tmp = [];
//     jsonfile.then(value => tmp.push(value));
//     let resp = tmp[0];
//     for (let i=0; i<resp.length; i++)
//     {
//         // We need to process the json first
//         let tmp_crime = resp[i];
//         console.log(tmp_crime['category']);
//     }
// }

function generateCrimes()
{
    for (let i=0; i<10; i++)
    {
        setTimeout(getTheCrimes, 1000*i);
    }
}

// Get crimes from coordinates around the main coordinate
function getTheCrimes()
    {
        let tmp_1 = Math.random()-0.5;
        let tmp_2 = Math.random()-0.5;
        getCrime(_lat+tmp_1, _lng+tmp_2, getRandom(1, 12));
    }
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }