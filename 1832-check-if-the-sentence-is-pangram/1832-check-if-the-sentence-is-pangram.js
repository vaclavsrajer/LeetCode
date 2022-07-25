/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const set = new Set();
    let count = 0;
    
    for(let letter of sentence){
        if(!set.has(letter)){
            set.add(letter);
            count++;
        }
    }
    
    if(count === 26){
        return true;
    }
    return false;
};