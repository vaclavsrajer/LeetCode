/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const object = {};
    for(const num of nums){
        if(!object[num]){
            object[num] = num;
        }
    }
    
    const array = [];
    for(let i = 1; i <= nums.length; i++){
        if(!object[i]){
            array.push(i);
        }
    }
    return array;
};