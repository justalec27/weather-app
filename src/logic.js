// Create URL
export function createUrl (city) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=us&key=SRJBDRP83HWD6GER6HMCFK5KG&contentType=json` 

    console.log(url)
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
    const feelsLike = data.currentConditions.feelslike;
    const humidity = data.currentConditions.humidity;
    const conditions = data.currentConditions.conditions;
    const sunrise = data.currentConditions.sunrise;
    const sunset = data.currentConditions.sunset;
    
     return {
        location,
        feelsLike,
        humidity,
        conditions,
        sunrise,
        sunset,
      }
}
