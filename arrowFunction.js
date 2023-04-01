function myFunc(){
    console.log('Hello World');
    return true;
}

function myFunc2(){
    return 5;
}

const result = myFunc();
const output = myFunc2();

const myFunc3 = () => {
    console.log('Calling Func 3');
}

console.log('Result: ', result);
console.log('Output: ', output);

myFunc3();

const myFunc4 = (x, y) => {
    console.log('Calling Func 4');
    return 'Hello;'
}

// console.log(myFunc4());
myFunc4(); //Hello;

console.log('Hello;');