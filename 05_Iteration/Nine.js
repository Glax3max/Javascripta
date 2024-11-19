const arr = [1,2,3,4,5]

const initialValue = 0;
const sumWithInitial = arr.reduce(
    (accumulator,currentValue) => accumulator+currentValue,
    initialValue
);

console.log(sumWithInitial);


const cart = [
    {
        product:"Apple",
        price:122
    },
    {
        product:"Apple",
        price:123
    },
    {
        product:"Apple",
        price:12132
    },
    {
        product:"Apple",
        price:12334
    }
]

const total  = cart.reduce((acc,item) => acc+item.price,0);
console.log(total);
