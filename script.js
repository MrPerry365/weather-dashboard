// GIVEN a weather dashboard with form inputs

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e4c37d72093faee736ec72cca74607d5";
var apiKey = "e4c37d72093faee736ec72cca74607d5";
// make API call function
function getWeather(city) {
  var weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=imperial";
  // var forcastURL2 =
  //   "https://api.openweathermap.org/data/2.5/forecast?q=" + city +
  //   "&appid=" +
  //   apiKey +
  //   "&units=imperial";

  // first step get todays weather for a givin city //

  // first call weather by city
  // extract lon/lat from weather by city response
  // user lon/lat to make onecall api call
  // extract current days data from onecall response
  // extract forecast data from same onecall response

  $.ajax({
    url: weatherURL,
    method: "GET"
  }).then(function (weather) {
    console.log(weather);
    var nowMoment = moment();

    var lon = weather.coord.lon;
    var lat = weather.coord.lat;

    var oneCallURL =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      apiKey +
      "&units=imperial";

    $.ajax({
      url: oneCallURL,
      method: "GET"
    }).then(function (oneCallResponse) {
      console.log(oneCallResponse);

      var temp = oneCallResponse.current.temp;
      var humidity = oneCallResponse.current.humidity;
      var windspeed = oneCallResponse.current.wind_speed;
      var uv = oneCallResponse.current.uvi;

      $("#currentTemp").append(temp);
      $("#currentHumidity").append(humidity);
      $("#currentWind").append(windspeed);
      $("#currentUV").append(uv);

      for(i =0; i < 5; i++) {
          var currentTemp = oneCallResponse.daily[i].temp.day;
          $("#currentTemp" + i).append(currentTemp);
      };
    })
  })
};

// const weatherApi =
//   "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=33.44&lon=-94.04&exclude=hourly,daily&appid=e4c37d72093faee736ec72cca74607d5";

// async function getWeather() {
//   const response = await fetch(weatherApi);
//   const data = await response.json();

//   console.log(data);
// }
getWeather("chicago");

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// make an input and button for search
// save inputs to local storage as buttons to recall

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions,

// the temperature = current.temp
// the humidity = current.humidity
// the wind speed = current.wind_speed
//  and the UV index = current.uvi
// the following is bootstrap contextual classes to change background and color
// <li class="list-group-item list-group-item-success">A simple success list group item</li>
// <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
// <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
//
//on search, retrieved info for search is displayed on main card

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// retrieved info for search makes cards for 5day forecast

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or //
