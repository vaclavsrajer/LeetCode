/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if(arr.length <= 1){
        return [-1];
    }
    
    for(let i = 0; i < arr.length; i++){
        if(i +1 === arr.length){
            arr[i] = -1;
            break;
        }
        let currentMax = arr[i+1];
        for(let j = i+2; j < arr.length; j++){
            if(currentMax < arr[j]){
                currentMax = arr[j];
            }
        }
        arr[i] = currentMax;
    }
    return arr;
};