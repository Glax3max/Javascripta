// SingleTon Objects

const tinder = new Object () //Its a Singleton Object
console.log(tinder)

const tinder2 = {} //Its a non singleton Object
console.log(tinder2)


const regularUser = {
    email : "Sam@gmail.com",
    fullName: {
        FirstName:"Abhishek",
        MiddelName:"Kumar",
        LastName:"Gupta"
    }
}

const obj1 = {
    1:"A",
    2:"B"
}

const obj2 = {
    3:"C",
    4:"D"
}

const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2};
console.log(obj4)

// Real Life Example 
// Comma seperated array of objects

const users = [
    {
        id:1,
        email:"Abhi@gmail.com"
    },
    {
        id:2,
        email:"bbhi@gmail.com"
    },
    {
        id:3,
        email:"cbhi@gmail.com"
    }
]

users.forEach((i) => console.log(i));




console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser))

regularUser.isLoggedIn = function() {
    console.log("LoggedIn boy")
}
console.log(regularUser.hasOwnProperty('isLoggedIn'))



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Destructuring of an Object

const course = {
    coursename : "js in hindi",
    price:99,
    courseInstructor:"Hitesh Sir"
}

// console.log(course.courseInstructor);

const {courseInstructor:CI} = course;

console.log(CI)