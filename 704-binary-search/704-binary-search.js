/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 1 && target === nums[0]){
        return 0;
    }
    return binarySearch(nums, target, 0);
};

function binarySearch(nums, target, startingIndex){
    const half = Math.floor(nums.length / 2);
    let array = [];
    if(nums.length === 1 && target !== nums[0]){
        return -1;
    }
    if(nums[half] === target){
        return startingIndex + half;
    }
    if(nums[half] > target){
        array = nums.slice(0, half);
        return binarySearch(array, target, startingIndex);
    }else if(nums[half] < target){
        array = nums.slice(half)
        return binarySearch(array, target, startingIndex+half);
    }
}