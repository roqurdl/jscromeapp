const API_KEY = "cc5eefef8357ca8a91f11cb122d94633";

function geOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather h1:first-child");
      const city = document.querySelector("#weather h1:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function geoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(geOk, geoError);
