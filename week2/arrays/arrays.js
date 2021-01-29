const myArr = ['bob', 'betty', 'sue'];
const myOtherArray = new Array();
myOtherArray.push("The Secret Life Of Walter Mitty"); //add item to end
myOtherArray.push("My Best Friend's Wedding");
//myArr.pop(); //removes last item
//myArr.shift(); //removes first item
myArr.unshift('james'); //add item to beginning

console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); //read single item
console.log(myArr[1]);
console.log(myArr.indexOf('betty'));
const bettyIdx = myArr.indexOf('betty');
console.log(myArr[bettyIdx]); //if not found -1, if found real index number
if (bettyIdx > -1) {
    console.log(myArr[bettyIdx]);
}
myArr.splice(bettyIdx, 0, 'robert');
console.log(myArr);
console.log(myArr.length);
//Math.random() for random 0 and 1
//Math.round(n) rounds to nearest whole number
//myArr.length - 1 to get the last index number of an array
const randomNumber = Math.round(Math.random() * (myArr.length -1));
console.log(myArr[randomNumber]);
