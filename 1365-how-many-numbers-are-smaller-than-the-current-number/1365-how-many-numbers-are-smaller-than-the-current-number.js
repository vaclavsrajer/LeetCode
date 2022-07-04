/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const object = {};
    const array = [...nums].sort((a,b) => a -b);
    for(let i = 0; i < array.length; i++){
        if(isNaN(object[array[i]])){
            object[array[i]] = i;
        }
    }
    const outputArray = [];
    console.log(object);
    for(let j = 0; j < array.length; j++){
        outputArray.push(object[nums[j]]);
    }
    return outputArray;
};