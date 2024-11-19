// for of

// ["", "", ""]
// [{},{},{}]

// const arr = [1,3,4,776,3,2,97]
// console.log(typeof(arr))
// for (const i of arr) {
//     console.log(`This is =>  ${i}`)
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Maps

const map = new Map()

map.set("IN" , "India")
map.set("USA" , "United States of america")
map.set("CH" , "China")
map.set("RU" , "Russia")
map.set("RU" , "Russia")

// console.log(map)

for(const [key,value] of map) {
    console.log(`${key} ->  ${value}`)
}

const myObj = {
    name:"ABhishek",
    age:23,
    state:"Jharkhand"
}

for(const [key, value] of myObj) {
    console.log(`${key}  :-:  ${value}`)
}
