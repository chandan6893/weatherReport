const form = document.querySelector(".form");
const inputSearch = document.querySelector("#inputSearch");
const parent = document.querySelector(".parent");
const button=document.querySelector(".btn");

button.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(inputSearch.value)
  getWeather(inputSearch.value);
  inputSearch.value="";
});

function getWeather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=79330c2ed70086cc49420a6d8d9eb0f1&units=metric`
  )
    .then((response) => response.json())
    .then((dat) => showWeather(dat));
  //  .catch((error) => console.log(error));
}

function showWeather(dat) {
  // console.log(dat)

  parent.innerHTML = `  
            <div class="weatherReport" >
            <h1>City : ${dat.name} </h1>
            <h1>Temp : ${dat.main["temp"]} °C </h1>
            <h1>${dat.weather[0].main}  </h1>
            </div>`;
}
