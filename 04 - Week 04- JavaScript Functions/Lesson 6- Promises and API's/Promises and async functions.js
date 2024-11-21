function waiting(callback) {
    console.log("You are waiting for your meal 1");
    setTimeout(() => {
        console.log("Your food is ready");
        callback()
        

        
    },4000);  //The function will run after the timer has run
    
}

function ready() {
    console.log("Your food has been served");
    
    
}

waiting(ready)  //The function is passed as a parameter because it will run after the set timeout
console.log("You are waiting for your meal 2");
console.log("You are waiting for your meal 3");

let workout = true
let p = new Promise((resolve, reject)=>{        //the first parameter is thepositive oneand the second is the negative.
    if (workout) {
        resolve("Man's looking like Johhny Bravo")

    } else{
        reject("You're looking bleh")
    }          

})
p.then((message)=> message.split(""))
.then(array=> console.log(array))
.catch(e=>{

})

async function waiting() {
    let p = await new Promise((resolve,reject) => {

    })
    
    
}

// API's 

fetch('https://matthew-dean-brown.github.io/api-data/data.json')
.then(API => API.json())
.then(data => {
    console.log(data);
    
})
.catch(err => console.error(err))

/*async function fetchData() {
   let api = await fetch('https://matthew-dean-brown.github.io/api-data/data.json')
   if(api.ok != true) throw new Error("Problems Eish");
   
   console.log(api);
   
    
} 
fetchData()
*/


/* const fetchData = async() => {
    let api = await fetch('https://matthew-dean-brown.github.io/api-data/data.json')
    if(api.ok != true) throw new Error("Problems Eish");
    let data = await api.json()
    
    console.log(data);
    
     
 } 
 fetchData()
*/
 const fetchData = async() => {
    let api = (await fetch('https://matthew-dean-brown.github.io/api-data/data.json')).json()
    console.log(api);
    
     
 } 
 fetchData()



