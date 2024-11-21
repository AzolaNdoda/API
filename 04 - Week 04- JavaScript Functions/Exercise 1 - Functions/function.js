// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply
// all 3 numbers together. Note: The argument passed must NOT be the same number. 
function multiply(a,b,c) {
    if (a !== b && a !== c && b !== c) {
        return a * b * c;
    } else {
        ("All numbers must be different");

        
    }
    
}
multiply(2,4,6)
console.log("The product of the arguments is " + multiply(2,4,6));

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a
// number of minutes as an argument and returns the amount in seconds. ***Do not
// use a console.log() inside of the function***

let convertToSeconds = (minutes) => minutes * 60
let minutes = 2
console.log("There are " + minutes*60 + " seconds in 2 minutes");




// TODO: Create a function called fahrenheitToCelsius that takes the temperature as
// an parameter and returns the equivalent temperature in Celsius. ***Do not use a
// console.log() inside of the function***

function fahrenheitToCelsius(temperature_f) {
    return (temperature_f -32) * 5/9;
    
}
console.log("The temperature is " + fahrenheitToCelsius(24) + " degrees Celsius");
 
// TODO: Create a function that takes a string as a parameter and returns the reverse
// of the string. ***Do not use a console.log() inside of the function ***

function reverseString(string) {
    return string.split("").reverse().join("");
}
console.log("The reverse of Azola is " + reverseString("Azola"));
 
// TODO: Create a function that takes in a string and returns the number of Vowels in
// the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a
// console.log() inside of the function***
function countVowels(string) {
    let count = 0;
    for (let char of string.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
        else{
        ("There are no vowels")
    }

} 
return count
}
console.log("There are " + countVowels("working")+ " vowels in 'Working' ");
 


// TODO: Create a “isPrime” function that takes a number as a parameter and returns
// true if the number is prime, and false otherwise. Make sure to test your code with 4
// numbers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// testing the code with 
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
console.log(isPrime(2));  // true
console.log(isPrime(4));  // false