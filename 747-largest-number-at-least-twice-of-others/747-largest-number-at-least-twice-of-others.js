var dominantIndex = function(nums) {
    if(nums.length < 1){
        return -1;
    }
    

    let maxIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[maxIndex] < nums[i] && nums[i] / nums[maxIndex] >= 2){
            maxIndex = i;
        }
    }
    
    for(const num of nums){
        if(nums[maxIndex] !== num && nums[maxIndex] / num < 2){
            return -1;
        }
    }
    return maxIndex;
};