// without return keyword
// function greet() {
//     console.log("Hi Azola");
    
// }
//  greet()

// function greet(name) {
//     console.log("Hi, "+ name);
    
// }
// greet("Azola")

// // with return keyword
// function returned(a,b) {
//   return a && b ? a+b: a  //  return will replace the place where you called the function 

    
// }
// console.log("Your number is " + returned(10,9));

// // function expression -When it is declared a value 
// An anonymous function does not have a value after the function 
// // Hoisting is the process of moving function declarations to the top of your file (e.g console.log())

//  let run = function(a){
//     console.log("You are running " + a); 
    
//  }
//  run("alone ")

// self-invoking function -peak anonymous function
// (function() {
//     console.log("Wow I'm Anonymous");
     
// })()

// arrow function- You do not have to type the "function keyword" but works the same as a function expression
// let walk = () =>{
//     console.log("You are not very active");
    
// }
// walk()

// You do not need to add {} braces if the arrow function is on one line
// const walk = a => "You are walking " + a  //You can add a ternary operator
// console.log(walk("very fast"));

let walk = () =>{
    var name = "Azola" //locally scoped 
    console.log("You are not very active");
        
}
 walk()
console.log(name);

// What is a recursive function in JS ?
// How to use a callback function