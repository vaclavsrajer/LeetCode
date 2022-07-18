/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    if(n <= 1){
        return 0;
    }
    return n-1;
};