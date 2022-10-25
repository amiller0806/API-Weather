var searchButton = document.getElementById("my-city");
// var weatherContainer = document.getElementById("weather-container");
var day1Weather = document.getElementById("day-1");
var day2Weather = document.getElementById("day-2");
var day3Weather = document.getElementById("day-3");
var day4Weather = document.getElementById("day-4");
var day5Weather = document.getElementById("day-5");









// var conditions = document.getElementById("conditions");
// var temperature = document.getElementById("temperature");
// var humidity = document.getElementById("humidity");
// var windSpeed = document.getElementById("windSpeed");
// https://howtocreateapps.com/fetch-and-display-json-html-javascript/
// https://www.tutorialstonight.com/display-json-data-in-html-page
// https://www.youtube.com/watch?v=8R3FtApLdms
// youtube.com/watch?v=VMj3uLO0fxI
var OwApiKey = "ecfada669401915d3a6f7b288000d0ee";

function getWeather(city) {
  //      var city = document.getElementById("input-city").value;
  // console.log(city.value);

  var city = document.getElementById("input-city");

  document
    .querySelector("form.enter-city")
    .addEventListener("submit", function (e) {
      //prevent the normal submission of the form
      e.preventDefault();

      console.log(city.value);
      // use Open Weather API key to get weather in city of user's choice
      var requestWeatherUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city.value +
        "&appid=" +
        OwApiKey +
        "&cnt=5";

      fetch(requestWeatherUrl)
        .then((response) => {
          return response.json();
        }) // Convert data to json
        .then((data) => {
          appendData(data);
          console.log(data);
        })
        .catch((err) =>{
            console.log('error: ' + err);
        });

    });
}



function appendData(data) {
  


  for (var i = 0; i < data.length; i++) {
    const p = document.createElement("p");

  

  

    p.innerHTML =
      data[i].city.name +
      data[i].list[0].dt_txt +
      data[i].list[0].main.temp +
      data[i].list[0].main.humidity +
      data[i].list[0].wind.speed +
      data[i].list[0].weather[0].main;
    day1Weather.appendChild(p);
    day2Weather.appendChild(p);
    day3Weather.appendChild(p);
    day4Weather.appendChild(p);
    day5Weather.appendChild(p);
  }
}




// addEventListener activated when user clicks search button, will run the getConcerts function
searchButton.addEventListener("click", getWeather());
searchButton.addEventListener("click", appendData());

// .then((response) => {
//     console.log(response);
//     return response.json();

//     // list (weather stuff)
//     // list.main
//     // list.weather
//     // list.dt
//     // city.coord.lat City geo location, latitude
//     //  city.coord.lon City geo location, longitude
// // city.coord.lon
//   })

//   .then((data) => {
//     console.log(data);
//    city.coord = city.coord.lat city.coord.lon;
//     weather = list.weather.city.coord

//     console.log(data.list.weather.city.coord);

// addEventListener activated when user clicks search button, will run the getWeather function
// searchButton.addEventListener("click", getWeather);

// function latLon() {
//     var url = `https://api.openweathermap.org/geo/1.0/direct?q=city&appid=ecfada669401915d3a6f7b288000d0ee`
//     // var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ecfada669401915d3a6f7b288000d0ee`
//     fetch(url)
//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (response) {
//             console.log(response);
//         });
//     }

//     searchButton.addEventListener("click", function (event) {
//         event.preventDefault();

//         var city = document.getElementById("city").value;

//     })

//             // city.value;

// searchButton.addEventListener("click", searchCity); // new quote on button click

// let weather = {

//     fetchWeather: function (city) {
//         fetch('urlWeather')

//     .then(function (response) {
//         if (!response.ok) {
//             alert("Unable to find weather.");
//             throw new Error("Unable to find weather");
//         }
//         return response.json();

//     })

//     .then(function (data) {
//         this.showWeather(data) ;
//     },

// function showWeather(data) {
//     const { name } = data;
//     // const { icon, description } = data.weather[0];
//     // const { temp, humidity } = data.main;
//     // const { speed } = data.wind;
// city.innerText = "Weather in " + name;
// searchCity();
//     // document.querySelector(".icon").src =
//     //   "https://openweathermap.org/img/wn/" + icon + ".png";
//     // document.querySelector(".description").innerText = description;
//     // document.querySelector(".temp").innerText = temp + "°C";
//     // document.querySelector(".humidity").innerText =
//     //   "Humidity: " + humidity + "%";
//     // document.querySelector(".wind").innerText =
//     //   "Wind speed: " + speed + " km/h";
//     // document.querySelector(".weather").classList.remove("loading");
//     // document.body.style.backgroundImage =
//     //   "url('https://source.unsplash.com/1600x900/?" + name + "')";

// })

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// function latLon() {
//     var url = `https://api.openweathermap.org/geo/1.0/direct?q={city}&appid=ecfada669401915d3a6f7b288000d0ee`
//     // var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ecfada669401915d3a6f7b288000d0ee`
//     fetch(url)
//         .then(function (response) {
//             return response.json();

//         })
//         .then(function (response) {
//             console.log(response);
//         });
//     }

//     searchButton.addEventListener("click", function (event) {
//         event.preventDefault();

//         var city = document.getElementById("city").value;

//     })
// latLon();

// 1. THEN I am presented with current and future conditions for that city and that city is
//  added to the search history
// 2. WHEN I view current weather conditions for that city
// 3. THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature,
//  the humidity, and the wind speed
// 4.WHEN I view future weather conditions for that city
// 5. THEN I am presented with a 5-day forecast that displays the date, an
// icon representation of weather conditions, the temperature, the wind speed, and the humidity
// 6. WHEN I click on a city in the search history
// 7. THEN I am again presented with current and future conditions for that city

// https://www.youtube.com/watch?v=WZNG8UomjSI

// https://www.youtube.com/watch?v=GXrDEA3SIOQ

// https://www.youtube.com/watch?v=nGVoHEZojiQ

// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={ecfada669401915d3a6f7b288000d0ee }

// GRAB LAT AND LON VALUES, pass to another function forecast function (name it anything )
// then pass lat and lon to that, place fetch within URL

// Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates i
// instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates
// given a city name?
