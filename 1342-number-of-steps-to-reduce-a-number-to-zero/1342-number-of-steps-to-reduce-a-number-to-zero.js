/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    return helper(num, 0);
};

function helper(num, steps){
    if(num === 0){
        return steps
    }
    const half = num % 2 === 0 ? num / 2 : num - 1;
    return helper(half, steps + 1);
}