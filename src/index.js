import "./styles.css"
import { createUrl,fetchData, displayData, startLoading, finishLoading } from "./logic";
/*
Info needed from the api:
address
currentConditions .conditions , .sunrise. , .sunset, .feelslike, .humidity

TO DO next:
The submit button gives an error, double check why

*/

let city = "paris"


const submit = document.getElementById("submit")

submit.addEventListener("click", (event) => {
    event.preventDefault()
    city = document.getElementById("search").value
    const url = createUrl(city).url
    displayData(url)

    document.getElementById("search").value= ""
})
        
