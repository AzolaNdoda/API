// let person1 = {
//     name: "Azola",
//     surname: "Ndoda",
//     hairType: "Braids",
//     get fullname() {
//         return this.name + this.surname;
        
//     }
// }
// // person.favColor = "Green"
// // console.log(person.fullname);



// // Destructuring 
// // let {name} = person
// // console.log();

// let person2 = {
//     name: "Nikiwe",
//     surname: "Hlongwane",
//     hairType: "Curly",
//     get fullname(){
//         return this.name + this.surname 

//     }
  
// }
// // console.log(person.fullname);

// //Factory functions

// function createPerson(name,surname, hairType ){
//     return {
//     name:name,
//     surname: surname,
//     hairType: hairType

//     }
// }

// let person3 = createPerson("Asanda", "Thobatsi", "Afro")
// console.log(person3);

// // Constructor Functions


// let person4 = new CreatePerson("Kyle", "Patterson", "Curly")


// // 
// createPerson.prototype.fullname = function(){
//     console.log("Hello " + this.name);
    
// }

// let input = prompt("What is your name? ")
// console.log(input);

// let person5 = new CreatePerson("Lindo","Ntabeni", "Curly")
// let person6 = new CreatePerson("Nasiphi","Dibinkonzo", "straight")

// let people = [person5, person6]
// console.log(people);

// for (let object of people) {
//     if (object.hairType == "straight") {
//         object.hairType = "Curly"
//         console.log(object.name);    
//     }
     
    
// }

// JAVASCRIPT OBJECT NOTATION

// let cars = [
//     {
//         brand: "Toyota",
//         models: [{type:"Corolla"}]

//     }, 

//     {
//         brand: "BMW",
//         models: [{}]

//     }
// ]

// Error handling- 
// try and catch do not handle logic errors
// When you make a custom error you have to be descriptive about what the error is 
// console.error is used for errors


function times(a,b) {
    if (typeof a != "number" || typeof b != "number") throw new Error("Hold up a or b is not a number");      
    
    return a*b
    
}

try{
    console.log(times(1,8));
    console.log("Hi there times!");
    
    
} catch (e){                  // You can name it anything you want - It is an error object 
    console.error(e);
    console.log("This is after the error");
    
                            
 
} finally{
    console.log("Yay! I have run and I'm out of breath");
    
}  

