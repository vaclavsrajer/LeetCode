var sortArrayByParity = function(nums) {
    	let evenPointer = 0;

	for(let oddPointer = 0; oddPointer < nums.length; oddPointer ++){
		if(nums[oddPointer] % 2 === 0){
			let temp = nums[evenPointer];
			nums[evenPointer] = nums[oddPointer];
			nums[oddPointer] = temp
			evenPointer++; 
		}
	}

	return nums;
};