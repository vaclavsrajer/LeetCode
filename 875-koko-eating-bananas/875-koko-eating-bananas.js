/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let leftPointer = 1;
    let rightPointer = Math.max(...piles);
    let result = rightPointer;
    
    while(leftPointer <= rightPointer){
        const mid = Math.floor((leftPointer + rightPointer) / 2);
        let count = 0;
        for(let bananas of piles){
            count += Math.ceil(bananas / mid);
        }
        if(count > h){
            leftPointer = mid + 1;
        }
        else{
            rightPointer = mid - 1;
            result = Math.min(mid,result);
        }
        
    }
    
    return result;
        
};