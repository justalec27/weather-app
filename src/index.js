import "./styles.css"
import { createUrl,fetchData } from "./logic";
/*
Info needed from the api:
address
currentConditions .conditions , .sunrise. , .sunset, .feelslike, .humidity


*/

const city = "london"

const location = createUrl(city).url

console.log(location)

const random = fetchData(location).address

console.log(random)

// async function main() {
//   const data = await fetchData(location); // wait until fetchData finishes
//     console.log(data.location); // now works!
// }


// main()
// const lala = main();

// const location = document.querySelector(".location")
// location.textContent = lala.data.location