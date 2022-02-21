function add(num1, num2){
    // seting the value of num2 
    /*//if we don't have more parameter value then we set a value 0 if undefined
    // system-1
     if(num2 == undefined){
        num2 = 0;
    } */

    /* 
    //system-2
    */
//    num2 = num2 || 0;

    console.log(num1, num2);
    const total = num1 + num2; 
    return total;
}
const result = add(15);
console.log(result);