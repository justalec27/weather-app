import "./styles.css"
import { createUrl,fetchData } from "./logic";
/*
Info needed from the api:
address
currentConditions .conditions , .sunrise. , .sunset, .feelslike, .humidity


*/

let city = "paris"

const url = createUrl(city).url

console.log(url)

const location =  document.querySelector(".location")
const feelsLike = document.querySelector(".feels-like")
const humidity = document.querySelector(".humidity")
const sunrise = document.querySelector(".sunrise")
const sunset = document.querySelector(".sunset")
const conditions = document.querySelector(".conditions")


async function main() {
  const weather = await fetchData(url); 
    
    
    location.textContent = `City: ${weather.location}`;
    conditions.textContent = `Conditions: ${weather.conditions}`;
    feelsLike.textContent = `Feels like: ${weather.feelsLike}`;
    humidity.textContent = `Humidity: ${weather.humidity}%`;
    sunrise.textContent = `Sunrise: ${weather.sunrise}`;
    sunset.textContent = `Sunset: ${weather.sunset}`;

}

 const submit = document.getElementById("submit")

submit.addEventListener("click", (event) => {
    event.preventDefault()
    city = document.getElementById("search").value
    console.log(city)
    document.getElementById("search").value= ""
})
        

main()
