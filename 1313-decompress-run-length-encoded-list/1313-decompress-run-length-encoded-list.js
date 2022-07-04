/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const array = [];
    for(let i = 0; i < nums.length; i += 2){
        for(let j = 0; j < nums[i]; j++){
            array.push(nums[i+1])
        }
    }
    return array;
};