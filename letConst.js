const numbers = [45, 23, 89, 60];
// numbers = [99, 145, 9] not allowed to set in a const variable or arry;
numbers.push(555);
numbers[1] = 333;
// console.log(numbers);
const student = {
    roll: 101, name: 'mofis', job: 'intern'
};
student.name = 'Shibly'; //this change are allowed to const variable type object
// console.log(student);
/* 
student = {
    name: 'Noman', roll: 30, job:'Professional'
}
->this reassign type variable will not work; it will bring an Error 
*/
