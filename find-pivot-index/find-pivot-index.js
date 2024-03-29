var pivotIndex = function (nums) {    
    
    let sum = 0;
    let leftSum = 0;
    
    for(const num of nums){
        sum+= num;
    }
    
    for(let i = 0; i < nums.length; i++){
        if(leftSum === sum - leftSum - nums[i]){
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};