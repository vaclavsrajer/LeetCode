var moveZeroes = function (nums) {
	let lastNonZeroFound = 0;
	
	for(let i = 0; i < nums.length; i++){
		if(nums[i] !== 0){
			nums[lastNonZeroFound] = nums[i];
			lastNonZeroFound++;
		}
	}

	for(let j = lastNonZeroFound;j < nums.length; j++){
		nums[j] = 0;
	}

};