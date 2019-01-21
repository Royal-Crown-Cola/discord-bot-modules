var bodyParts = ['foot', 'hand', 'leg', 'arm', 'head', 'nose', 
    'chin', 'hair'];

var pluralBodyParts = ['legs', 'hands', 'feet', 'arms'];

var adjectives = ['small', 'weird', 'smelly', 'fat', 'stupid', 
    'lazy', 'boring'];

var words = ['cat', 'poop', 'warthog', 'flea', 'vermin', 'stick', 
    'fart'];

var names = ['Tom', 'Ben', 'Scott', 'Quinn', 'Niel', 'Mike', 
    'Gudac', 'David', 'Alex', 'Carlos'];

// a function that randomly selects elements from arrays
function randomInsultGenerator(name){

    // allow user to insult a specific person
    if (!name){
    var randomName = names[Math.floor(Math.random() * names.length)];
    name = randomName
}

    // grab random elements from arrays
    var randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];

    var pluralRandomBodyPart = pluralBodyParts[Math.floor(Math.random() *
     pluralBodyParts.length)]

    var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    var randomWord = words[Math.floor(Math.random() * words.length)];

    return name + ', your ' + randomBodyPart 
    + ' looks like a ' + randomAdjective + ' ' + randomWord + '!!!';
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


//console.log(insult);
// Write something to check for the adjective starting with a vowel for a/an
// Write something to check for plurality for look/looks

module.exports = {
    randomInsultGenerator:randomInsultGenerator,
    addBodyPart:addBodyPart,
    addPluralBodyPart:addPluralBodyPart,
    addAdjective:addAdjective,
    addWord:addWord,
    addName:addName
};