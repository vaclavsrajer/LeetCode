/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length <= 2){
        return nums.sort((a,b)=> a-b)[nums.length-1];
    }
    let distinct = nums[0];
    let count = 1;
    const object = {};
    const newArray = [];
    
    for(const num of nums){
        if(!object[num]){
            newArray.push(num);
        }
    }
    
    newArray.sort((a,b) => b-a);
    
    for(let i = 1; i < newArray.length; i++){
        if(newArray[i-1] !== newArray[i]){
            count++;
            distinct=newArray[i];
        }
        if(count === 3){
            return distinct;
        }
    }
    
    return newArray.sort((a,b)=> a-b)[newArray.length -1];
};