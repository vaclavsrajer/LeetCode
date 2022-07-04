/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count= 0;
    const string = n.toString(2)
    console.log(string);
    for(let i = 0; i<string.length; i++){
        if(string[i] === "1"){
            count++;
        }
    }
    return count;
};