const API_KEY = "2ce8a16bf64c94955c4e3e39ad51d3c0"; //https://home.openweathermap.org/api_keys
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        // latitude: latitude;
        // logitude: longitude;
        latitude,
        longitude
    }; 
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        const parsedCoords = JSON.parse(loadedCoords);
        // console.log(parseCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}


function init(){
    loadCoords();
}

init();