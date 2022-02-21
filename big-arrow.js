const add = (num1, num2) => num1 + num2;
const add2 = (num1, num2) => num1 + num2;

const sum1 = add2(10, 25);
console.log(sum1);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const resultOfMultiply = multiply(10, 25, 40);
console.log(resultOfMultiply);

// single parameter
const tenTimes = (num) => num * 10;
const output = tenTimes(5);
console.log(output);

// single parameter thakle eivabew perameter likha hoy
const fiveTimes = num => num * 5;
const fiveTimesOutput = fiveTimes(5);

console.log(fiveTimesOutput);

// empty parameter 
const getName = () => 'Brandon Sam';
const name = getName();
console.log(name);

// multiline korte gele ager moto second bracket dite hobe
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multiply = sum * diff;
    const divide = multiply / x;
    const fraction = multiply % divide;
    return fraction;
}
const math1 = doMath(20, 5);
console.log(math1);