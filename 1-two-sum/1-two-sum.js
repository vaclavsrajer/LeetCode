var twoSum = function(nums, target) {
    const indexes = {};
    for(i = 0; i < nums.length; i++){
        if(typeof indexes[nums[i]] !== "undefined"){
            return Array.of(indexes[nums[i]], i)
        } 
        indexes[target - nums[i]] = i;
    }
};