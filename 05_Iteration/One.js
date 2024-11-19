const myObj = {
    name:"ABhishek",
    age:23,
    state:"Jharkhand"
}

for(const key in myObj) {
    console.log(`${key} and the data is ${myObj[key]}`)
}


const arr = [ "Lakshman","Ram","Sita","Ram","Hanuman"]

for(const key in arr) {
    console.log(`${key} -> ${arr[key]}`);
}