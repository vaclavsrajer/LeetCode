/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0;
    let right = matrix[0].length-1;
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][matrix[i].length-1] === target) return true;
        if(matrix[i][matrix[i].length-1] > target){
            while(left <= right){
                const middle = Math.floor((right+left) / 2);
                if(matrix[i][middle] === target){
                    return true;
                }else {
                    if(matrix[i][middle] > target){
                        right = middle -1;
                    }else{
                        left = middle + 1;
                    }
                }
            }
        }
    }
    
    return false;
};
