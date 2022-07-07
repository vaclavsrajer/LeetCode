/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const copyArray = [...heights].sort((a,b) => a-b);
    let count = 0;
    for(let i = 0; i < heights.length; i++){
        if(copyArray[i] !== heights[i]){
            count++;
        }
    }
    return count;
    
    
};