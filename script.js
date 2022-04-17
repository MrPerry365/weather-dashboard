// GIVEN a weather dashboard with form inputs

// make API call function


    const weatherApi = "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=33.44&lon=-94.04&exclude=hourly,daily&appid=e4c37d72093faee736ec72cca74607d5";

    async function getWeather() {

    const response = await fetch(weatherApi);
    const data = await response.json();
    const data = JSON.parse('{current.temp}')
    console.log(data);
    
       
}
getWeather();

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

//
//on search, retrieved info for search is displayed on main card

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// retrieved info for search makes cards for 5day forecast

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe


