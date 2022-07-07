var removeElement = function(nums, val) {
	let nonRemovedValueIndex = 0;

	for(let i = 0; i < nums.length; i++){
		if(nums[i] !== val){
			let temp = nums[i];
			nums[i] = val;
			nums[nonRemovedValueIndex++] = temp;
		}
	}
    return nonRemovedValueIndex;
};