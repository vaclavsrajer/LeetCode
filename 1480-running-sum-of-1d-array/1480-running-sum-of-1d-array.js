/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const array = [];
    
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum+= nums[i];
        array.push(sum);
    }
    return array;
};