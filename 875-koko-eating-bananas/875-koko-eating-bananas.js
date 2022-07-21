/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let leftPointer = 1;
    let rightPointer = Math.max(...piles);
    let response = rightPointer;
    
    while(leftPointer <= rightPointer){
        let mid = Math.floor((rightPointer+leftPointer) / 2) ;
        let k = 0;
        for(const bananas of piles){
            k+= Math.ceil(bananas/mid);
            if(k > h){
                break
            }
        }
        if(k > h){
            leftPointer = mid + 1; 
        }else{
            response = Math.min(response, mid)
            rightPointer = mid - 1;
        }
    }
    
    return response;
        
};