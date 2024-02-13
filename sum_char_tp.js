let sumChar = {
  message: "testlololo!lolol",
  message2: "ooooooo",
  
  charCount: function(str) {
    let charsMap = {};
    
    for (let char of str) {
      charsMap[char] = (charsMap[char] || 0) + 1;
    }
    
    return charsMap;
  },

 stringInOtherString: function(hay, needle){
    return hay.includes(needle)
},


deleteChar : function(message, characters){
    return message.replaceAll(characters,'')
},

};

// console.log(sumChar.charCount(sumChar.message));
// console.log("est ce que 'e' est présent dans le message " + sumChar.stringInOtherString('e'));
// console.log(sumChar.stringInOtherString(sumChar.message,sumChar.message2));
// console.log(sumChar.deleteChar('choc!olate','!'))
// let res = /^[a-zA-Z]+$/.test('sfjd');
// console.log(res);

let secondObject = {
  specialChars : /[^a-zA-Z]/g,
  stringToNumberArray: function(message){
    //suppression des chars spéciaux
    message = sumChar.deleteChar(message,this.specialChars)
    message = message.toLowerCase()
    //récupération de l'objet contenant les caractères
    charsMap = sumChar.charCount(message)
    array = []
    for(let key in charsMap){
      array.push(charsMap[key])
    }   
    return array
  }

}

console.log(secondObject.stringToNumberArray('"Razerr!(;gh'));