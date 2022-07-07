/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if(nums.length === 1){
        return 1;
    }
    let totalMax = 0;
    let currentMax = 0;
    let zeroTurned = 0;

    for(let i = 0; i < nums.length;i++){
        if(nums[i] === 0 && zeroTurned === 0){
            zeroTurned = i + 1;
            currentMax++;
        }else if(nums[i] === 0){
            totalMax = Math.max(totalMax, currentMax)
            currentMax = i - zeroTurned + 1
            zeroTurned = i + 1;
        }
        else{
           currentMax++; 
        }
    }
    return Math.max(totalMax, currentMax);
};