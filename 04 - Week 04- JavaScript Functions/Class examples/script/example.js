// // Function to multiply three numbers
// function multiply(a, b, c) {
//     if (a !== b && a !== c && b !== c) {
//         return a * b * c;
//     } else {
//         throw new Error("All numbers must be different");
//     }
// }

// // Function expression to convert minutes to seconds
// const convertToSeconds = (minutes) => minutes * 60;

// // Function to convert Fahrenheit to Celsius
// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// }

// // Function to reverse a string
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// // Function to count vowels in a string
// function countVowels(str) {
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if ("aeiou".includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// // Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// // Testing the isPrime function
// console.log(isPrime(11)); // true
// console.log(isPrime(15)); // false
// console.log(isPrime(2));  // true
// console.log(isPrime(4));  // false


// // / TODO: Create a function that tries to modify both variables
// var globalCount2 =  "modified global variable" //assigning the variable outside the functio
// console.log(globalCount2)
// // //a function that will moddify both variable
//  function locandGlob(){
//     let local2 = "modified local variable"
//     console.log(local2);
//     local2 = "this is the modified variable"
//     console.log(local2);
//     globalCount2 = "this is the modified global variable"
//     console.log(globalCount);
//  }
//  locandGlob();


// Global variable
// var globalCount = 0; // Initialized global variable

// // Function demonstrating local scope
// function localCount(a, b) {
//     let x = 10;  // Local variable x
//     let y = 20;  // Local variable y
//     return x * y; // Local scope variables used
// }

// console.log(localCount(10, 20)); // Output: 200

// // Function attempting to modify both global and local variables
// function modifyVariables() {
//     globalCount += 1; // Modifies global variable
//     let a = 10;       // Local variable a
//     let b = 20;       // Local variable b
//     return a * b;     // Returns product of local variables
// }

// console.log(modifyVariables()); // Output: 200
// console.log(globalCount); // Output: 1 (global variable incremented)

// // Student constructor function
// function Student(name, surname, favColor) {
//     this.firstName = name;   // Assigns first name
//     this.lastName = surname; // Assigns last name
//     this.favColor = favColor; // Assigns favorite color
// }

// console.log(Student); // Logs the constructor function

// // Creating several student instances
// let person1 = new Student("Moesha", "Hlongwane", "Black");
// let person2 = new Student("Sbahle", "Mzobe", "Peach");
// let person3 = new Student("Alulutho", "Dumani", "B/W");

// console.log(person1, person2, person3); // Logs the created instances

// // Object literal with nested properties
// let exercises = [
//     {
//         Name: "Exercise 1",
//         Topic: "Cloud Computing",
//         passRate: 80
//     },
//     {
//         Name: "Exercise 2",
//         Topic: "Data Science",
//         passRate: 70
//     },
//     {
//         Name: "Exercise 3",
//         Topic: "Cyber Security",
//         passRate: 85
//     }
// ];

// console.log(exercises); // Logs the array of objects




function validateInput(input, type) {
    if (type === 'string') {
        if (typeof input !== 'string' || input.trim() === '') {
            throw new Error('Invalid input: Expected a non-empty string.');
        }
    } else if (type === 'number') {
        if (typeof input !== 'number' || isNaN(input)) {
            throw new Error('Invalid input: Expected a valid number.');
        }
    } else if (type === 'array') {
        if (!Array.isArray(input)) {
            throw new Error('Invalid input: Expected an array.');
        }
    } else {
        throw new Error('Unknown type for validation.');
    }
    return true;
}


function demonstrateMultipleErrorTypes() {
    try {
      let x = 1 / 0; // Division by zero
    } catch (e) {
      if (e instanceof RangeError) {
        console.log('RangeError: ', e.message);
      } else if (e instanceof TypeError) {
        console.log('TypeError: ', e.message);
      } else if (e instanceof ReferenceError) {
        console.log('ReferenceError: ', e.message);
      } else {
        console.log('Error: ', e.message);
      }
    }
  
    try {
      let y = 'hello' * 2; // TypeError
    } catch (e) {
      console.log('TypeError: ', e.message);
    }
  
    try {
      let z = undefinedVariable; // ReferenceError
    } catch (e) {
      console.log('ReferenceError: ', e.message);
    }
  }
  ```
  
  *String Manipulation Helper Functions*
  
  ```
  function trimString(str) {
    return str.trim();
  }
  
  function uppercaseString(str) {
    return str.toUpperCase();
  }
  
  function lowercaseString(str) {
    return str.toLowerCase();
  }
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  function replaceSubstring(str, oldSubstr, newSubstr) {
    return str.replace(oldSubstr, newSubstr);
  }
  ```
  
  *Array Operation Helper Functions*
  
  ```
  function arrayContains(arr, elem) {
    return arr.includes(elem);
  }
  
  function arrayIndexOf(arr, elem) {
    return arr.indexOf(elem);
  }
  
  function arrayPush(arr, elem) {
    arr.push(elem);
    return arr;
  }
  
  function arrayPop(arr) {
    return arr.pop();
  }
  
  function arrayShift(arr) {
    return arr.shift();
  }
  
  function arrayUnshift(arr, elem) {
    arr.unshift(elem);
    return arr;
  }
  
  function arraySlice(arr, start, end) {
    return arr.slice(start, end);
  }
  
  function arraySplice(arr, start, deleteCount, ...items) {
    arr.splice(start, deleteCount, ...items);
    return arr;
  }
  
  function arrayConcat(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  function arrayJoin(arr, separator) {
    return arr.join(separator);
  }
  
  function arrayReverse(arr) {
    return arr.reverse();
  }
  
  function arraySort(arr, compareFunction) {
    return arr.sort(compareFunction);
  }