const game = window.prompt("I have 4 games in my Collection. Pick a number between 1 and 4 to find out about the game you've chosen.");

const myGames = [
    {title: 'Sequence', type: 'board game', numberOfPlayers: 6, rating: 8, shortDescription: 'team game pull cards and try to get a sequence of 5 of their chips'},
    {title: 'Settlers of Catan', type: 'board game', numberOfPlayers: 4, rating: 9, shortDescription: 'competition to collect and trade resources to build settlements'},
    {title: 'Jenga', type: 'puzzle', numberOfPlayers: 6, rating: 3, shortDescription: 'puzzle where you pull out brick from stack without knocking the tower down'},
    {title: 'Jackbox', type: 'mini game', numberOfPlayers: 10, rating: 8, shortDescription: 'online collection of mini games like trivia and quiplash'},
    {title: 'Blackjack', type: 'card game', numberOfPlayers: 10, rating: 6, shortDescription: 'betting card game where you try to get the closest to 21 without going over'}

];

console.log('title', myGames[0].title);

window.alert(
    'You selected ' + myGames[game - 1].title + ' which is a ' + myGames[game - 1].type + ' and played with up to ' + myGames[game - 1].numberOfPlayers + ' players. It is described as a ' + myGames[game - 1].shortDescription + '. I rate this game ' + myGames[game - 1].rating + ' out of 10.'
    );