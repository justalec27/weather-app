import "./styles.css"
import { createUrl,fetchData, main } from "./logic";
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
    console.log(city)
    const url = createUrl(city).url
    console.log(url)
    main(url)

    document.getElementById("search").value= ""
})
        

