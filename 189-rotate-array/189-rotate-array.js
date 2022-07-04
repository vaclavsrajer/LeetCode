/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k === 0){
        return nums;
    }
    let splitNumber = nums.length - k;
    if(Math.abs(splitNumber) > nums.length){
        splitNumber = k  % nums.length
    }
    const spliced = nums.splice(splitNumber);
    const unshift = nums.unshift(...spliced);
    return unshift;
};