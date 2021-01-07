async function getRestrooms(lat, lng)
{
    let url = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?per_page=20&lat='+lat+'&lng='+lng;
    let resp = await fetch(url);
    let data = await resp.json();
    for (let i=0; i<data.length; i++)
    {
        let tmp_restroom = data[i];
        let tmp_name = tmp_restroom['name'];
        let tmp_lat = parseFloat(tmp_restroom['latitude']);
        let tmp_lng = parseFloat(tmp_restroom['longitude']);
        let tmp_street = tmp_restroom['street'];
        let tmp_directions = tmp_restroom['directions'];
        let is_unisex = tmp_restroom['unisex'];
        let is_accessible = tmp_restroom['accessible'];
        let description = "";
        if (is_accessible) description += "</br>ACCESSIBLE";
        // console.log(tmp_restroom);
        //  all_crimes.push(L.marker([tmp_lat, tmp_lng], {icon: crimeIcon}).bindPopup("<b>Crime</b><br/>"+"<b>"+tmp_category+"</b><br/>"+tmp_desc));
        if (is_unisex)
        {
            all_refuges.push(L.marker([tmp_lat, tmp_lng], {icon: refugeIcon}).bindPopup("<b>Gender Neutral Restroom: "+tmp_name+"</b></br>"+tmp_street+"</br>"+tmp_directions+description));
        }
        else
        {
            all_restrooms.push(L.marker([tmp_lat, tmp_lng], {icon: restroomIcon}).bindPopup("<b>Restroom: "+tmp_name+"</b></br>"+tmp_street+"</br"+tmp_directions+"</br"+description));
        }
    }
}


async function getCrime(lat, lng, month) // All strings btw
{
    let url = 'https://data.police.uk/api/crimes-at-location?date=2020-'+month+'&lat='+lat+'&lng='+lng
    let resp = await fetch(url, {method: 'POST', mode: 'cors'});
    let data = await resp.json();
    for (let i=0; i<data.length; i++)
    {
        let tmp_crime = data[i];
        // console.log(tmp_crime);
        let tmp_category = tmp_crime["category"];

        tmp_category = tmp_category.split("-");

        for (let i=0; i<tmp_category.length; i++)
        {
            tmp_category[i] = tmp_category[i][0].toUpperCase() + tmp_category[i].substr(1);
        }
        tmp_category = tmp_category.join(" ");

        let tmp_lat = parseFloat(tmp_crime["location"]["latitude"]); //+ (Math.random()/10)*getRandom(-1, 1);
        let tmp_lng = parseFloat(tmp_crime["location"]["longitude"]); //+ (Math.random()/10)*getRandom(-1, 1);
        let tmp_desc = tmp_crime["location"]["street"]["name"];
        all_crimes.push(L.marker([tmp_lat, tmp_lng], {icon: crimeIcon}).bindPopup("<b>Crime</b><br/><b>"+tmp_category+"</b><br/>"+tmp_desc));
    }
}

function generateRestrooms()
{
    for (let i=0; i<10; i++)
    {
        setTimeout(getTheRestrooms, 500*i);
    }
}

function getTheRestrooms()
{
    let tmp_1 = Math.random()-Math.random();
    let tmp_2 = Math.random()-Math.random();
    getRestrooms(_lat+tmp_1, _lng+tmp_2);
}

function generateCrimes()
{
    for (let i=0; i<100; i++)
    {
        setTimeout(getTheCrimes, i);
    }
}

// Get crimes from coordinates around the main coordinate
function getTheCrimes()
{
    let tmp_1 = Math.random()-Math.random();
    let tmp_2 = Math.random()-Math.random();
    getCrime(_lat+tmp_1, _lng+tmp_2, getRandom(1, 12));
}

function getRandom(min, max) { return Math.floor(Math.random() * (max - min) ) + min; }