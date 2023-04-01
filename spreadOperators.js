// const values = [1, 2, 3, 4 ,5];

// console.log([...values, 1, 2, 3 ]);

// const obj = {
//     name: 'John',
//     city: 'Chennai',
//     profession: 'IT'
// }

// console.log({...obj, city: 'Bangalore'});

function myFunc(params, ...rest){
    console.log(rest)
}

myFunc({x: 1, y: 2}, 2, true);