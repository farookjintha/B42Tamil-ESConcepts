const { add, substract, divide, multiply, email, MyClass } = require('./computation');

const addition = add(1, 2);
const substraction = substract(100, 2);
const multiplication = multiply(2, 5);
const division = divide(40, 2);

console.log(addition);
console.log(substraction);
console.log(multiplication);
console.log(division);


console.log(email);

const myObj = new MyClass();

myObj.myFunc();