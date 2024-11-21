// TODO: Create a function that validates user input

//** */ The Answer Starts Here***//
/*let username = String(window.prompt("Enter your username: "));
let password = window.prompt("Enter your password: ");

function user_Input() {
    
    if(username === "string"){
        if (typeof username !== "string") {
            throw new Error("Username needs to contain letters");
        
                   
        }
    }if (password == "string" && "number") {
        if ( password !== "string" && "number") {
        throw new Error("Password should have numbers and letters");
        
            
        } 
    }  
        

    return ("Welcome!")
}
*/
         //***The Answer Ends Here//***/

// TODO: Create a function that demonstrates multiple error types

function add(a,b) {
   if (a != "number" || b != "number")
       throw new Error("Addition can only occur when a and b are numbers");
     return a + b 
        
    
 }
 try {
    console.log(add(2,4));
    
              
} catch (error) {
     console.error("An error was caught " + error);
    
    
    
}
finally{
    console.log("This will always be executed");
 }


// TODO: Create a collection of helper functions for string manipulation


function uppercaseString(str) {
    return str.toUpperCase();
    
}
console.log("The string in Uppercase is " + uppercaseString("Azola Ndoda"));

function lowercaseString(str) {
    return str.toLowerCase();
    
}
console.log("The string in lowercase is " + lowercaseString("Azola Ndoda"));


function split(str) {
    return str.split("");
    
}
console.log("When the string is split it is " + split("Azola Ndoda"));

function reverseString(str) {
    return str.split("").reverse().join("");
    
}
console.log("When the string methods split, reverse and join are used the output is " + reverseString("Azola Ndoda"));

// TODO: Create helper functions for array operations

let students = ["Momo", "Sbahle", "Alulutho", "Azola"]
let cars = ["Ford Defender", "Bentley", "Audi A1", "Mercedes G-Class"]

function arraytoString() {
    return students.toString();
    
}
console.log("The Array Students as a String is " + arraytoString(students));

function arrayConcat() {
    return students.concat(cars);
    
}
console.log("The concated array is " + students.concat(cars));

function copyWithin() {
    return students.copyWithin(3,1);
    
}
console.log(copyWithin(students));

