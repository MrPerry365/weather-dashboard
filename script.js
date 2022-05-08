// GIVEN a weather dashboard with form inputs

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e4c37d72093faee736ec72cca74607d5";
var apiKey = "e4c37d72093faee736ec72cca74607d5";

function getCity () {
  return $("#city-input").val();
}

$("#citySearch").on("click", (onClickEventObject) => {
  console.log("click");
  var city =  getCity();
  getWeather(city);
});

//

// make API call function
function getWeather(city) {
  var weatherURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=imperial";

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

          var currentHumidity = oneCallResponse.daily[i].humidity;
          $("#currentHumidity" + i).append(currentHumidity);

          var currentWind = oneCallResponse.daily[i].wind_speed ;
          $("#currentWind" + i).append(currentWind);

    
      };
    })
  })
};

