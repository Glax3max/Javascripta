const car = {
    name:"Tata",
    model:"Harrier",
    horn: function() {
        console.log(this.name)
    }
}

car.horn();

const func = () => {
    const username = "Raj"
    console.log(this.username)
}

func();

const addNUM = (num1,num2) => (num1+num2)


const result = addNUM(4,4)

console.log(result)