// TODO: Create an array called numbers with values 1 through 5
let numbers = [1,2,3,4,5]

// TODO: Write a for loop that prints each number in the array
for (let n = 0; n < numbers.length; n++) {
    const element = numbers[n];
    console.log(numbers[n]);
    
    
} 

// TODO: Write a while loop that counts down from 5 to 1
let n = 5
while (n>0) {
    --n
    console.log(numbers[n]);
       
}

// TODO: Create a loop that prints only even numbers from the numbers array

for (let evnNumbers = 1; evnNumbers < numbers.length; evnNumbers++) {
    const element = numbers[evnNumbers];
    if (evnNumbers % 2 ==0) {
    console.log(evnNumbers);
        
    }    
}
// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0
for (let n =0; n< numbers.length; n++) {
    sum += numbers[n]
    
}
console.log(sum);   
