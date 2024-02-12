//créer fonction qui fait somme des a dans une chaîne de caractères

function letterCount(characterString, concernedChar = 'a'){
    let charNumber = 0
    for(character of characterString){
        if(character == concernedChar){
            charNumber++
        }
    }
    return charNumber
}

const test = 'alexandrelegrand'

// console.log(aCount(test));


//compter le nombre de chaque caractère:

function countEveryCharacter(characterString){
    const characterSet = new Set(characterString.trim())
    for (let character of characterSet){
        console.log(`there is ${letterCount(characterString,character)} ${character} in ${characterString} `)
    }
}

countEveryCharacter(test)