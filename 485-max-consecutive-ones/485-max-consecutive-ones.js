/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if(!nums.includes(1)){
        return 0;
    }
    let totalMax = 1;
    let currentMax = 1;
    for(let i = 1; i <= nums.length; i++){

        if(nums[i] === 1 && nums[i-1] === nums[i]){
            currentMax++;
        }else{
            totalMax = Math.max(totalMax, currentMax);
            currentMax = 1;
        }
    }
    return totalMax;
};