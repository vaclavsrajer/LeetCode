/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   const set = new Set();
    for(const num of nums){
        set.add(num);
        if(set.size > 3){
              set.delete(Math.min(...Array.from(set.values())))          
        }
    }
    
    if(set.size === 3){
        return Math.min(...Array.from(set.values()));
    }
    
    return Math.max(...Array.from(set.values()))
};