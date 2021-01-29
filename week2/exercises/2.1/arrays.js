// Movie
const userMovie = window.prompt("What's your favorite movie?");

const myMoviesArr = [
    "The Secret Life of Walter Mitty",
    " My Best Friend's Wedding",
    " O Brother Where Art Thou",
    " Someone Great",
    " Guardians of the Galaxy 2",
];
console.log(myMoviesArr);
myMoviesArr.push(userMovie);
console.log(myMoviesArr.toString());
window.alert(myMoviesArr);