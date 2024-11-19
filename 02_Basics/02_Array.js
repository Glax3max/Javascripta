const myArray = ['A','B','C','D','E','F'];

console.log(myArray)


const MarvelHero = ["IronMan","BlackWidow","BlackPanther","SpiderMan"]
const DcHero = ["IronMan","BlackWidow","BlackPanther","SpiderMan"]

const AllHeros = MarvelHero.concat(DcHero);
console.log(AllHeros);

const AllHeros2_Spreaded = [...MarvelHero,...DcHero];

console.log(AllHeros2_Spreaded);


console.log(Array.isArray("Abhishek"))

console.log(Array.from("Abhishek"))

const nameArray = Array.from("Abhishek");

for(let i = 0;i<nameArray.length;i++) {
    console.log(nameArray[i]);
}


console.log(Array.from({name: "hitesh"})) //interesting //return an empty array " [] "


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

