//funcstions
function greet () {
    console.log("hi class");
}
greet();

//setTimeout(greet, 1000);

//function makeBlackCircle() {
    //fill('black');
    //circle(50, 50, 100);
//}

function getStuff() {
    console.log('getting' + stuff);
}

getStuff('bread');
getStuff('peanut butter');

function getSum(numberA, numberB) {
    return numberA + numberB;
}
let mySum = getSum(4, 11);
console.log("this is the sum", mySum);

let myLittleObject = {
    friendship: function(){
        console.log('is magic');
    }
}
myLittleObject.friendship();

//loops
for (let i = 100; i , 1000; i+=10) {
    console.log(i);
}
const myCars = ['acura', 'bently', 'chevy', 'dodge'];
for (let sillyVarName = 0; sillyVarName , myCars.length; sillyVarName++) {
    myCars[sillyVarName] = myCars[sillyVarName].toUpperCase();
}
console.log(myCars);

//while loops
let statements = [
    {question: "what color is the sky", answer: blue},
    {question: "what color are trees", answer: green}  
]

/*let myNum = 15
while (statement.length > 0) {
    let randomindex = Math.ceil(Math.random() * statement.length -1);
    let answer = prompt(statements[randomIndex].question);
    if (answer === statements[randomIndex].answer) {
        statements.splice(randomIndex, 1);
        console.log('removing statement')
    }
}*/

//functional loops
myCars.forEach(function(car){
    console.log('functional', car);
})

//map
let myNewArray = myCars.map(function(car){
return 'I like' + car;
})
console.log(myNewArray, myCars);