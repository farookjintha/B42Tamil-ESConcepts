class MyClass {
    username = '';
    firstName = 'MS';
    lastName = 'Dhoni';
    city = '';
    constructor(){
        this.username = 'John';
        this.city = 'Chennai';
        console.log('Calling constructor');
    }

    getFullName(){
        console.log(this.firstName + ' ' + this.lastName)
    }


    myFunc(){
        console.log('Calling myFunc');
        console.log('Name: ', this.username);
        console.log(`Name: ${this.username}`);
        console.log('City: ', this.city);
        console.log(`City: ${this.city}`);
        this.getFullName();
    };
}

const myObj = new MyClass(); //Object creation

myObj.myFunc();