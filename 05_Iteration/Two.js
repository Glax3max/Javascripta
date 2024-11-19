const arr = ["Bat","Ball","football","hockey"]

// arr.forEach(function(val) {
//     console.log(`Print within the function ${val}`)
// })


// arr.forEach((val) =>console.log(`Print within the function ${val}`))

const arrObj = [
    {
        name:"abhish",
        age:23,
        sex:"male"
    },
    {
        name:"abhish",
        age:23,
        sex:"male"
    },
    {
        name:"abhish",
        age:23,
        sex:"male"
    },
    {
        name:"abhish",
        age:23,
        sex:"male"
    }
]

arrObj.forEach((val) => console.log(`Object printed ${val.name} :  ${val.age} : ${val.sex}`))