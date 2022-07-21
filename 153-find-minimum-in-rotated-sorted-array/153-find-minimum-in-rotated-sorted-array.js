/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let min = nums[0];
    
    while(left < right){
        const mid = Math.floor((left + right) / 2);
        if(nums[left] > nums[right]){
            if(nums[mid] < nums[right]){
                min = Math.min(nums[mid], min);
                right = mid - 1;
            }else{
                min = Math.min(nums[right],min);
                left = mid + 1;
            }
        }else{
            if(nums[mid] > nums[left]){
                min = Math.min(nums[left],min);
                right = mid - 1;
            }else{
                min = Math.min(nums[mid], min);
                left = mid + 1;
            }
        }
    }
    
    return min;
};