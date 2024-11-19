const  heros = ["Shaktiman" , "Spiderman" , "Krish"]
console.log(typeof heros) // Output will be "object" but its actually "function object"

const obj = {
    name: "Abhishek",
    age:21
}
console.log(typeof obj) // Output will be "object" but its actually "function object"


const myFunction = function() {
    console.log("Hello by Function");
}

myFunction();

console.log(typeof myFunction)


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let car1 = "tata"

let car2 = car1
car2 = "Force"

console.log(car1)
console.log(car2)

let UserOne = {
    name:"Abhishek",
    age:54
}

let UserTwo = UserOne;
UserTwo.name = "Raj";
console.log(UserOne.name)//Raj
console.log(UserTwo.name)//Raj

// The above thing happened bacause non-primitive data are passed as a reference but primitive are passed as copy
