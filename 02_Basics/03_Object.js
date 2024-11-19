// singleton
// singleton -> object.create

// Object literals

const mySym = Symbol("key1")
const jsUser = {
    name : "Hitesh",
    "age": 18,
    [mySym] : "mykey1",
    location:"Jaipur",
    email : "hitest@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday" , "Tuesday"],
}


console.log(jsUser.age)
jsUser.name = "Abhishek"
console.log(jsUser["name"])
jsUser.greeting = function ()  {
    console.log("Function within the Object")
}
jsUser.greeting2 = function () {
    console.log(`Hello Js user , ${jsUser.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());