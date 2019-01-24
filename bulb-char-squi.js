var userInput = ['bulbasaur', 'charmander', 'squirtle'];
var garyIsJustBetter = ['mewtwo']; 

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bulbasaur' || userInput === 'charmander' || userInput === 'squirtle') {
        return userInput;
    }
    else if (userInput === 'pikachu' || userInput === 'eevee') {
        return 'As cool as these starters are, they are not valid choices in this game ::(:';
    }
    else if (!userInput) {
        return 'Hey this is a quick rock paper sissors game, enter !pokefite' + 
        ' and then a gen 1 starter to see if you win!';
    }
    else {
        return 'You done goofed and now you lost, try choosing a valid gen 1 starter!' +
        ':dolphin:';
    }
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 1000);
    if (randomNumber <= 332) {
        return 'bulbasaur';
    }
    else if (333 <= randomNumber && randomNumber <= 665) {
        return 'charmander';
    }
    else if (666 <= randomNumber && randomNumber <= 998){
        return 'squirtle';
    }
    else
        return 'mewtwo';
}

function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return 'Team Rocket showed up and stole both of your pokemon, ' +
        'fight them off and try again!';
    }
    if (userChoice === 'bulbasaur') {
        if (computerChoice === 'charmander') {
            return 'Gary\'s :charmander: used fireblast on :bulbasaur: and incinerated it.' +
            ' Maybe choose a better starter next time champ. :dolphin:';
        }
        else {
            return 'Your bulbasaur used sleep powder on Gary\'s squirtle and you put ' +
            'them both to sleep! Better check that wallet for some cash and book it ' +
            'before officer Jenny shows up!';
        }
    }
    if (userChoice === 'charmander') {
        if (computerChoice === 'squirtle') {
            return 'Gary\'s :squirtle: used hydropump and put out the tail flame on your' +
            ' :charmander: It died. You monster. I guess you won\'t be a pokemon master' +
            ' after all. :dolphin:';
        }
        else {
            return 'Your :charmander: lit Gary and his :bulbasaur: on fire, looks like ' +
            'they won\'t be bothering you for a while!';
        }
    }
    if (userChoice === 'squirtle') {
        if (computerChoice === 'bulbasaur') {
            return 'Gary\'s :bulbasaur: used solarbeam and dried up your :squirtle:' +
            ' you better get it to some water before it dies! :dolphin:.';
        }
        else {
            return 'It\'s super effective! Your :squirtle: knocked out :charmander: with a ' +
            'bubble and made it look like Gary pissed himself. Guess he\'s not getting ' +
            'laid tonight! Great job!';
        }
    }
    if (userChoice === 'bulbasaur' || userChoice === 'charmander' || userChoice === 
        'squirtle' && computerChoice === 'mewtwo') {
            return 'A wild Mewtwo showed up and used psychic on you and Gary.' + 
            'The two of you turn and follow him back to his cave as new mindslaves.';
    }
    
}

function pokefite() {
    var promptUsesChoice = prompt("Choose bulbasaur, charmander, or squirtle.");
    var userChoice = getUserChoice(promptUsesChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log('Gary selected', computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}