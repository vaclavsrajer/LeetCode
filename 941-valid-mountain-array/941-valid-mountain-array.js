/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3){
        return false;
    }
    let up = true;
    let down = false;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1] && up && i-1 !== 0){
            up = false;
            down = true;
        }else{
          
            if(up){
                if(!(arr[i-1] < arr[i])){
                    return false;
                }
            }
            if(down){
                if(!(arr[i-1] > arr[i])){
                    return false;
                }
            }
        }
    }
    return down;
};