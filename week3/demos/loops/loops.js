// loop with number

/*for (let i = 0; i < 10; i++) {
    console.log('this is i', 1);
}*/

//loop with array

const myMovies = ['star wars', 'empire strikes back', 'return of the jedi','raiders of the lost ark', 'last crusade'];
for(let j = 0; j < myMovies.length; j++) {
    console.log('I like', myMovies[j]);
}

// while loop
let myVar = false;
while (myVar === false) {
    console.log('this will happen once');
    myVar = true;
}

// while loop -- removing items in array
const myNums = [1, 2, 3, 4, 5, 6];
while (myNums.length > 0) {
console.log('removing' + myNums[myNums.length -1]);
myNums.pop();
}
console.log(myNums);

// forEach

//map
