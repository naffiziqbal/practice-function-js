// Celsius To Farhenheit  
function toFarhenheit(n){
     let farhenhit = (n * 1.8) + 32;
     farhenhit = farhenhit.toFixed(1);
     return farhenhit
}
// console.log("Current Wether Is", toFarhenheit(35), "Farhenheit");


function toCelsius(n){
    let celsius = ( n  - 32) * .5556; 
    celsius = parseInt(celsius)
    return celsius
}
const toCelsiusIntoInt = parseInt(toCelsius(100))
console.log("Current Wether Is", toCelsiusIntoInt,  " Degree");
console.log("Current Wether Is ",+ toCelsiusIntoInt);
console.log(`Current Wether is ${toCelsiusIntoInt} DEg`)
