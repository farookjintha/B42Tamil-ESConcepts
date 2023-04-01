function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

 function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

class MyClass{
    constructor(){
        console.log('MyClass is called')
    };

    myFunc(){
        console.log('MyFunc is called')
    }
}

const email = 'farook@outlook.com'

module.exports = {add, substract, multiply, divide, MyClass, email};