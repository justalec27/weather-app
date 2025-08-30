// Create URL
export function createUrl (city) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=us&key=SRJBDRP83HWD6GER6HMCFK5KG&contentType=json` 

    return {
        url,
    }
}

export function startLoading () {
    const loader = document.querySelector(".loader")
    loader.style.visibility = "visible"
}

export function finishLoading () {
    const loader = document.querySelector(".loader")
    loader.style.visibility = "hidden"
}

//Fetch data from API
export async function fetchData (url){
    try {
    startLoading()
    const response = await fetch(url, {mode: 'cors'});
    const data = await response.json();

    //   console.log(data);
    //   console.log(data.address);
    //   console.log(data.currentConditions.datetime)
    //   console.log(data.currentConditions.feelslike);
    //   console.log(data.currentConditions.humidity);
    //   console.log(data.currentConditions.conditions);
    //   console.log(data.currentConditions.sunrise);
    //   console.log(data.currentConditions.sunset);
    
    let location = data.address;
    let feelslike = data.currentConditions.feelslike;
    let humidity = data.currentConditions.humidity;
    let conditions = data.currentConditions.conditions;
    let sunrise = data.currentConditions.sunrise;
    let sunset = data.currentConditions.sunset;

    finishLoading()
    
     return {
        location,
        feelslike,
        humidity,
        conditions,
        sunrise,
        sunset,
      };
    } catch {
        finishLoading()
        alert("The location is unknow. Try again")
        return {
            location: "Unknown",
            feelslike: "-",
            humidity: "-",
            conditions: "-", 
            sunrise: "-",
            sunset: "-", 
      };
    };
    
};


// Display data on screen
export async function displayData(url) {
  const weather = await fetchData(url); 

  // Grab the DOM elements
  const locationEl = document.querySelector(".location");
  const conditionsEl = document.querySelector(".conditions");
  const feelslikeEl = document.querySelector(".feels-like");
  const humidityEl = document.querySelector(".humidity");
  const sunriseEl = document.querySelector(".sunrise");
  const sunsetEl = document.querySelector(".sunset");
    
    // Update DOM with weather data
  locationEl.textContent = `City: ${weather.location}`;
  conditionsEl.textContent = `Conditions: ${weather.conditions}`;
  feelslikeEl.textContent = `Feels like: ${weather.feelslike} degrees`;
  humidityEl.textContent = `Humidity: ${weather.humidity}%`;
  sunriseEl.textContent = `Sunrise: ${weather.sunrise}`;
  sunsetEl.textContent = `Sunset: ${weather.sunset}`;
}