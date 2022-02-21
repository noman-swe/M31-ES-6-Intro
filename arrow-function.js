// function declare
function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

// function expression
const add2 = function(num1, num2){
    return num1 + num2;
}//anonimous function; function in variable declaration

/*
//another declaration of function
 document.getElementById('my-btn').onclick = function handleEvent(){

} */


// arrow function
const add4 = (num1, num2) => num1 + num2;


const sum1 = add(15, 17);
const sum2 = add2(15, 18);
const sum4 = add2(15, 130);
console.log(sum1, sum2, sum4);
// 
