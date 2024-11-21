// TODO: Create a global variable called globalCount

var globalCount = 0

// TODO: Create a function that demonstrates local scope
function localCount(a,b) {
        return a * b;
 
}
console.log(localCount(10,20));

// TODO: Create a function that tries to modify both variables
function modifyVariables() {
    globalCount += 1; 
    let a = 10; 
    let b = 20; 
    return a * b;
  }
console.log(modifyVariables(10,20));
console.log(globalCount);



// TODO: Create a Student constructor function
function Student(name, surname, favColor ) {
    this.firstName = name;
    this.lastName = surname;
    this.favColor = favColor;
    
}


// TODO: Create several student instances
let person1 = new Student("Moesha", "Hlongwane", "Black")
let person2 = new Student("Sbahle", "Mzobe", "Peach")
let person3 = new Student("Alulutho", "Dumani", "B/W")
console.log(person1, person2, person3);


// TODO: Create an object literal with nested properties

let exercises = [
    {
        Name: "exercise 1",
        Topic: "Cloud Computing",
        passRate: 80,
        

},  {
        Name: "exercise 2",
        Topic: "Data Science",
        passRate: 70,



},

    {
        Name: "exercise 3",
        Topic: "Cyber Security",
        passRate: 85,  
    }
     
]
console.log(exercises);



