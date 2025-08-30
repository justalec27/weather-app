// Create URL
export function createUrl (city) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=us&key=SRJBDRP83HWD6GER6HMCFK5KG&contentType=json` 

    return {
        url,
    }
}


//Fetch data from API
export async function fetchData (url){
    const response = await fetch(
         url, 
        {mode: 'cors'});

    const data = await response.json();

      console.log(data);
      console.log(data.address);
      console.log(data.currentConditions.datetime)
      console.log(data.currentConditions.feelslike);
      console.log(data.currentConditions.humidity);
      console.log(data.currentConditions.conditions);
      console.log(data.currentConditions.sunrise);
      console.log(data.currentConditions.sunset);
    
    const location = data.address;
    const feelslike = data.currentConditions.feelslike;
    const humidity = data.currentConditions.humidity;
    const conditions = data.currentConditions.conditions;
    const sunrise = data.currentConditions.sunrise;
    const sunset = data.currentConditions.sunset;
    
     return {
        location,
        feelslike,
        humidity,
        conditions,
        sunrise,
        sunset,
      }
}


export async function main(url) {
  const weather = await fetchData(url); 

  // Grab the DOM elements
  const locationEl = document.querySelector(".location");
  const conditionsEl = document.querySelector(".conditions");
  const feelslikeEl = document.querySelector(".feels-like");
  const humidityEl = document.querySelector(".humidity");
  const sunriseEl = document.querySelector(".sunrise");
  const sunsetEl = document.querySelector(".sunset");
    
    // Update DOM with weather data
 console.log(weather.feelslike)
  locationEl.textContent = `City: ${weather.location}`;
  conditionsEl.textContent = `Conditions: ${weather.conditions}`;
  feelslikeEl.textContent = `Feels like: ${weather.feelslike}`;
  humidityEl.textContent = `Humidity: ${weather.humidity}%`;
  sunriseEl.textContent = `Sunrise: ${weather.sunrise}`;
  sunsetEl.textContent = `Sunset: ${weather.sunset}`;
}