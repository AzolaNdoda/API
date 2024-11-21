// TODO: Create a function called sum. The function will take in a parameter and
// calculate all the numbers from 0 -> the parameter. You must check if the parameter is
// an integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to
// use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure
// to test your code effectively.

function sum(num1) {
    let n = 0;
    
    if (typeof num1 == "number") {
        console.log("num1 is a number");
        
        for (let x = 0; x <= num1; x++) {
            n += x   
         
        }
        
    }  
    else {
        console.log("The value is not a number");
           
    }
    return n  
    }
    
sum(5)
console.log("The addition of the values is " + sum(5));


// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->
4*3*2*1 //output 24

function factorial(number) {
    let n = 1;
    for (let x = 1; x <= number; x++) {
        n *= x       
        
    }
return n 
    
}
factorial(5)
console.log("The output is " + factorial(5));

// TODO: Create a function called funkyMath . If this function is called with 2
// arguments the function will subtract the first from the second. If the function is called
// with 3 arguments it will add all 3 numbers together. If the function is called with 4
// arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide
// them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25

function funkyMath(a,b,c,d) {
     if(a && b, !c, !d){
        return b - a
    
}
else if (a && b && c, !d) {
    return a + b + c
    
} else if (a && b && c && d) {
    return (a + b) / (c + d)
    

}
else {
    return ("Incorrect input values, please input 2, 3 or 4 values!")
}

}   
console.log("The output of the operations is " + funkyMath(4,8,3,2));



// TODO: Create a loop that will remove all the odd numbers from the array and add
// them to a new array. Use the current array [1, 2 , 33, 45, 6,44]. Bonus: Make sure to arrange them from smallest to biggest.()
let numbers = [1,2,33,45,6,44];
let odd_numbers = [];
for ( let n = 0 ; n < numbers.length ; n++)
    if (numbers[n] %2!==0){
        odd_numbers.push(numbers[n])
    }
odd_numbers.sort((a, b) => a - b) 
console.log("The odd numbers in ascending order are " + odd_numbers);


// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car

let me = {
    firstname: "Azola",
    lastname: "Ndoda",
    age: "25",
    favcolour: "Peach",
    dreamcar: "G-Wagon"

}
// TODO: Create and add a new property and value of ‘favourite food’ to the object. 
me.favfood = "Pasta"

// TODO: . Now delete the age property from the object.
delete me.age 
console.log(me);

