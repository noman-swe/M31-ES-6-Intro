const numbers = [23, 65, 99, 21, 34];
/* console.log(numbers);
console.log(...numbers + ',#Note:array spread is a way to get the just array inside element'); */

// get the max value form the array inside element
const max = Math.max(...numbers);
// console.log(max);

// const numbers2 = [numbers] //->two dimentional array
//const numbers2 = [...numbers, 88]; //making one dimentional array by using array spread and adding new value
const numbers2 = [22 , ...numbers, 88]; 
numbers.push(44);
console.log(numbers2);
console.log(numbers);

/* numbers.push(55);
console.log(numbers); */