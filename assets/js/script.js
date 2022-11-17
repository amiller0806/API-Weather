// Global variables
var searchHistory = []
var searchHistory1 = ""
var searchHistory2 = ""
var searchHistory3 = ""




// References to DOM elements
var searchHistoryBox = document.querySelector('#history');
var searchButton = document.getElementById("my-city");
var weatherContainer = document.getElementById("weather-container");


// var iconsContainer = document.getElementById("icons-container");
var day1Weather = document.getElementById("day-1");
var day2Weather = document.getElementById("day-2");
var day3Weather = document.getElementById("day-3");
var day4Weather = document.getElementById("day-4");
var day5Weather = document.getElementById("day-5");




//   // ICONS:

var OwApiKey = "ecfada669401915d3a6f7b288000d0ee";






function firstPage() {
  var weatherBox = document.getElementsByClassName("card");
  for (var i=0;i< 5 ;i+=1){
    weatherBox[i].style.display = 'none';
  }
  
  
}





function renderSearchHistory() {

 // Start at end of history array and count down to show the most recent at the top.
 for (var i = searchHistory.length - 1; i >= 0; i--) {
  var btn = document.createElement('button');
  btn.classList.add('history-btn', 'btn-history');

  // `data-city` allows access to city name when click handler is invoked
  btn.setAttribute('data-city', searchHistory[i]);
  btn.textContent = searchHistory[i];
  searchHistoryBox.append(btn);
  displayHistory();
}
}

// bring saved history data from localstorage and write text on the web page
function displayHistory (){ 
  for (i=1; i<4; i++){ 
      if (localStorage.getItem("key"+(i).toString()) != "null"){
        document.getElementById("searchHistory-row" + (i).toString()).innerHTML = localStorage.getItem("key"+(i).toString()); 
      } 
  }
  renderSearchHistory();
}

// Search History to Local Storage 

// Function to display the search history list.


// Function to update history in local storage then updates displayed history.

//   if (weatherBox.display === "block") {
//     weatherBox.style.display = "none";
//   } 
  
//   else {

//   weatherContainer.style.display = "none";
//   }
// }
// weatherContainer.onload = function() {firstPage()};

function getWeather(city) {

  //      var city = document.getElementById("input-city").value;
  // console.log(city.value);

  var city = document.getElementById("input-city");

  document
    .querySelector("form.enter-city")
    .addEventListener("submit", function (e) {
      //prevent the normal submission of the form
      e.preventDefault();

      console.log(city);
      // use Open Weather API key to get weather in city of user's choice
      var requestWeatherUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city.value +
        "&appid=" +
        OwApiKey+"&units=imperial";

      fetch(requestWeatherUrl)
        .then((response) => {
          console.log(response);
          return response.json();
        }) // Convert data to json
        .then((data) => {
          console.log(data);
          lat = data.city.coord.lat;
          lon = data.city.coord.lon;
          console.log("Lat", data.city.coord.lat);
          console.log("Lon", data.city.coord.lon);
          appendData(data);
        
        })
        .catch((err) => {
          console.log("error: " + err);
        });
    });
    displayHistory();
    updateHistory();
}



//update search history
function updateHistory(){
  for (i=1; i<4; i++){ 
    if (localStorage.getItem("key"+(i).toString()) != "null"){
      document.getElementById("searchHistory-row" + (i).toString()).innerHTML = localStorage.getItem("key"+(i).toString()); 
    } 
    
  }
  renderSearchHistory();
}

function appendData(data) {
  
  
  
  var weatherContainer = document.querySelector("#weather-container");
  weatherContainer.textContent = "";
  
  // change to p instead of li?
  for (var i = 0; i < 40; i=i+8) {
    // var coordinatesArr = [];
    var wIcon = document.createElement("img");

    var weatherCard = document.createElement("div");

    weatherCard.setAttribute("class", "weather-card");
    var weatherList = document.createElement("ul");
    weatherList.className = "weather-list";
    var weatherItem = document.createElement("li");
    weatherItem.className = "weather-item";
    var cityName = document.createElement("li");
    cityName.setAttribute("class", "cityEl");
    var forecastDate = document.createElement("li");
    forecastDate.setAttribute("class", "dateEl");
    var forecastTemp = document.createElement("li");
    forecastTemp.setAttribute("class", "tempEl");
    var forecastHumidity = document.createElement("li");
    forecastHumidity.setAttribute("class", "humidityEl");
    var forecastWindSpeed = document.createElement("li");
    forecastWindSpeed.setAttribute("class", "windSpeedEl");
    var forecastConditions = document.createElement("li");
    forecastConditions.setAttribute("class", "conditionsEl");
   
    var iconCode = data.list[i].weather[0].icon;
    var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";

    wIcon.setAttribute("src", iconUrl);

  



    cityName.innerText = data.city.name + "";
    forecastDate.innerText = data.list[i].dt_txt + "";
    forecastTemp.innerText = "Temperature: " + data.list[i].main.temp + "°F";
    forecastHumidity.innerText = "Humidity: " + data.list[i].main.humidity + "%";
    forecastWindSpeed.innerText = "Wind Speed: " + data.list[i].wind.speed + "mph";
    forecastConditions.innerText = "Conditions: " + data.list[i].weather[0].main + "";
// ------------------------------------------------------- ICON TESTS--------------------------------------------------------------------------------

    weatherItem.append(
      cityName,
      forecastDate,
      forecastTemp,
      forecastHumidity,
      forecastWindSpeed,
      forecastConditions,

   
    )
    cityName.append(wIcon);

    weatherList.append(weatherItem,);
    weatherCard.append(weatherList);
    weatherContainer.append(weatherCard);
    


  };
 saveHistory();
}

function saveHistory(){
  searchHistory3 = localStorage.getItem("key2");
  searchHistory2 = localStorage.getItem("key1");
  searchHistory1 = document.getElementById("input-city").value;
  localStorage.setItem("key1", searchHistory1);
  localStorage.setItem("key2", searchHistory2);
  localStorage.setItem("key3", searchHistory3);
  renderSearchHistory();
}


function handleSearchHistoryClick(e) {
  // Don't do search if current elements is not a search history button
  if (!e.target.matches('.btn-history')) {
    return;
  }

  var btn = e.target;
  var city = btn.getAttribute('data-city');
  getWeather(city);
}
//  document.getElementById('icon').src = `http://openweathermap.org/img/w/${d.weather[0].icon}.png`;


// function showWeather(data) {


   
// //    // ------------------------------------------------------------------------ICON TESTS ----------------------------------------------------------------
// // //    for (var i = 0; i < 40; i++) {
// // //  $("#conditions").html("<img src='http://openweathermap.org/img/w/" + data.weather[i].icon + ".png' alt='Icon'}@2x.png`");
// // // }/Applications/Visual Studio Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html


// addEventListener activated when user clicks search button, will run the getConcerts function
searchButton.addEventListener("click", getWeather());

searchHistoryBox.addEventListener('click', handleSearchHistoryClick);


