/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const array = [];
    array.push([]);
    for(let i = 0; i < nums.length; i++){
        const helperArray = [];
        for(let j = 0; j < array.length; j++){
            helperArray.push(Array.of(...array[j],nums[i]))
        }
        for(let c = 0; c < helperArray.length; c++){
            array.push(helperArray[c])
        }
    }
    return array;
}