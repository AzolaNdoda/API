// TODO: Create a function called greet that takes a name parameter

function greet(name) {
    console.log("Hi "+ name);
       
}
greet("Azolah")
// TODO: Make the greet function return "Hello, [name]!"

greet=(name) => "Hello, "+ name 

// TODO: Create a function called add that takes two parameters

function add(a,b) {
        
}
add(12,6)

// TODO: Make the add function return the sum of both parameters
function add(a,b) {
    return a && b ? a+b: a
    
}

// TODO: Call both functions and store their results in variables
let greetResults = greet("Azolah")
let addResults = add(12,6)

// TODO: Print the results to the console
console.log(greetResults);
console.log("The addition of both parameters is "+ addResults);
