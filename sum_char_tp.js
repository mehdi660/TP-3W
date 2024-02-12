let sumChar = {
  message: "testlololololol",
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
}
};

console.log(sumChar.charCount(sumChar.message));
console.log("est ce que 'e' est présent dans le message " + sumChar.stringInOtherString('e'));



console.log(sumChar.stringInOtherString(sumChar.message,sumChar.message2));
