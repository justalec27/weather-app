import "./styles.css"
import { createUrl,fetchData, displayData, startLoading, finishLoading } from "./logic";


let city = "paris"


const submit = document.getElementById("submit")

submit.addEventListener("click", (event) => {
    event.preventDefault()
    city = document.getElementById("search").value
    const url = createUrl(city).url
    displayData(url)

    document.getElementById("search").value= ""
})
        
