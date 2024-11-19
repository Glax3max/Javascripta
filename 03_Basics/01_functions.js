// function addTwoNumbers (number1,number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers (number1,number2) {  
    return number1+number2;
}


const  result = addTwoNumbers(2,3);
// console.log(result)

function loginUserMessage (username= "Anonumous") {
    if(!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} is my name`
}

const  hiStmt = loginUserMessage()

// console.log(hiStmt)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Rest operator -> bundels the parameters into one(...num1)

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(100,200,300))

function calculatePrice(val1,val2,...num1) {
    return num1
}

console.log(calculatePrice(100,200,3010,4010))


const user = {
    name:"Raj",
    age:23
}

function Intro(anyObject) {
    return `My name is ${anyObject.name} and my age is ${anyObject.age}`
}

console.log(Intro({name:"Sam",age:86}))