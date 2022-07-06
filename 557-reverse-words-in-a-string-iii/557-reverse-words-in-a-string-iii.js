/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const array = [];
    const stringSplit = s.split(" ");
    for(const word of stringSplit){
        let reversedWord = "";
        for(let letter = word.length-1; letter >= 0; letter--){
            reversedWord+= word[letter];
        }
        array.push(reversedWord);
    }
    return array.join(" ");
};