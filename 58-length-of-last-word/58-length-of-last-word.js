/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let currentMax = 0;
    let totalMax = 0;
    
    for(let letter of s){
        if(letter === " "){
            if(currentMax !== 0){
            totalMax = currentMax;
            currentMax = 0;
            }
                
        }else{
            currentMax++;
        }
    }
    
    if(currentMax === 0){
        return totalMax;
    }
    return currentMax;

};