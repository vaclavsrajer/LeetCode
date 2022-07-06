/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let maxNumber = 0;
    for(let i = 0; i < n.length; i++){
        let stringToNumber = parseInt(n[i]);
        if(stringToNumber === 9){
            return 9;
        }
        if(stringToNumber > maxNumber){
            maxNumber = stringToNumber;
        }
    }
    return maxNumber;
};