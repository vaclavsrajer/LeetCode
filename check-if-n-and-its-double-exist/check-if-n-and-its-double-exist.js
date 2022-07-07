/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const object = {};
    for(let i = 0; i < arr.length; i++){
        if(!isNaN(object[arr[i]])){
            return true;
        }
        object[arr[i]/2] = i;
        object[arr[i]*2] = i;
    }
    return false;
};