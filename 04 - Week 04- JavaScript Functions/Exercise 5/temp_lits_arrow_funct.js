// TODO: Create a multiline string using template literals

let weather = 
`condition: windy
date: 20 Nov 2024
clothes: warm`

// TODO: Create a function that uses template literals for HTML generation

function generateWeather(title, text) {
    return`
    <div class = "weather"
    <h1>${title}</h1>
    <p> ${text}</p>

    </div>
 `   
}
console.log(generateWeather("Weather Conditions", "The weather is very windy today"));

// TODO: Convert regular functions to arrow functions

//Normal function//
function multiply(a,b) {
    return a * b 
    
}
console.log(2,4);

// Arrow function //
let Operation = () => {
    return a * b
} 
console.log(multiply(2,4));


// TODO: Use arrow functions with array methods

let numbers = [2,4,6,8]
let numbersfunction = () => {
    numbers.sort().pop()
    return numbers
}
console.log(numbersfunction(numbers));

