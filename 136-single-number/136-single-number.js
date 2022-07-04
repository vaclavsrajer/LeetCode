/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const object = {};
    for(const number of nums){
        if(object[number]){
            object[number]++
        }else{
            object[number]=1;
        }
    }
    for(const key in object){
        if(object[key] === 1){
            return key;
        }
    }
};