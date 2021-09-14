function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "0cc018311d9ee0d57fc7b02e74e3b282";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`    
}

function onGeoError() {
    alert("Can't find you. No waether for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);