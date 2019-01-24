var bodyParts = ['foot', 'hand', 'leg', 'arm', 'head', 'nose', 
    'chin', 'hair'];

var pluralBodyParts = ['legs', 'hands', 'feet', 'arms'];

var adjectives = ['small', 'weird', 'smelly', 'fat', 'stupid', 
    'lazy', 'boring'];

var nouns = ['cat', 'poop', 'warthog', 'flea', 'vermin', 'stick', 
    'fart'];

var names = ['Tom', 'Ben', 'Scott', 'Quinn', 'Niel', 'Mike', 
    'Gudac', 'David', 'Alex', 'Carlos'];

// first insult function
function randomInsultGenerator(name){

    // allow user to insult a specific person
    if (!name){
        var randomName = names[Math.floor(Math.random() * names.length)];

    name = randomName
}

    // grab random elements from arrays
    var randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];

    var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return name + ', your ' + randomBodyPart 
    + ' looks like ' + getIndefinateArticle(randomAdjective) + ' ' + randomAdjective 
    + ' ' + randomNoun + '!!!';
}

// second insult function
function randomInsultGenerator2(name){

    // allow user to insult a specific person
    if (!name){
        var randomName = names[Math.floor(Math.random() * names.length)];

        name = randomName
}

    // grab random elements from arrays
    var pluralRandomBodyPart = pluralBodyParts[Math.floor(Math.random() *
        pluralBodyParts.length)];

    var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return name + ', your ' + pluralRandomBodyPart 
    + ' look like ' + getIndefinateArticle(randomAdjective) + ' ' + randomAdjective 
    + ' ' + randomNoun + '!!!';
}

// checks the first letter of a string for vowels
function getIndefinateArticle(word){

    var letter = word.charAt(0);
    switch(letter){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        return 'an';
        default: 
        return 'a';
    }

}

function addBodyPart(newBodyPart){

bodyParts.push(newBodyPart);
}

function addPluralBodyPart(newPluralBodyPart){

pluralBodyParts.push(newPluralBodyPart);
}

function addAdjective(newAdjective){

adjectives.push(newAdjective);
}

function addWord(newWord){

words.push(newWord);
}

function addName(newName){

names.push(newName);
}

var randomRandomInsult = [randomInsultGenerator, randomInsultGenerator2];

var insult = randomRandomInsult[Math.floor(Math.random() * randomRandomInsult.length)];

module.exports = {
    randomInsultGenerator:randomInsultGenerator,
    addBodyPart:addBodyPart,
    addPluralBodyPart:addPluralBodyPart,
    addAdjective:addAdjective,
    addWord:addWord,
    addName:addName
};