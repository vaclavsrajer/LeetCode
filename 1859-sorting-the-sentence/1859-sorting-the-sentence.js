/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const splittedString = s.split(" ")
    const brr = [];
    for(const word of splittedString){
        const splittedWord = word.split(/(\d+)/)
        brr.push(Array.of(splittedWord[0], splittedWord[1]));
    }

    const temp = []
    for(let i = 0; i < brr.length; i++){
        temp[brr[i][1]-1] = brr[i][0];
    }
    return temp.join(" ");
};