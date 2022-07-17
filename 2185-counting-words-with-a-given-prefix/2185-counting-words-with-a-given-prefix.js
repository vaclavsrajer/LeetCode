/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0;
    for(let i = 0; i < words.length; i++){
        let currentString = "";
        for(let j = 0; j < pref.length; j++){
            currentString += words[i][j];
        }
        if(currentString === pref){
            count++;
        }
    }
    return count;
};