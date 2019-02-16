// function square(x) {
//     return x * x;
// };
// console.log(square(3));

// //arrow functions are alwyas anonymous
// // const squareArrow = (x) => {
// //     return x * x;
// // }; 

// const squareArrow = (x) => x*x;

// console.log(squareArrow(4));

const fullName = "Mayank Yadav";

let getFirstName = (x) => x.split(' ')[0]; 

console.log(getFirstName(fullName));

//challenge

const multiplier = {
    // numbers - array of numberds
    //multiplyby - single number
    // multiply - return a new array where the number have been multiplied
    numbers : [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((numbers) => numbers *2);
    }
};

console.log(multiplier.multiply()); // [1, 2, 3] *2 [2, 4, 6]