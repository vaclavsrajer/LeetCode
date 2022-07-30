/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return helper(m,n);
};


function helper(m,n, object = {}){
    if(m === 1 && n === 1){
        return 1;
    }
    
    if(object[[m,n]]){
        return object[[m,n]];
    }
    if(m < 0 || n < 0){
        return 0;
    }
    object[[m,n]]= helper(m-1, n, object) + helper(m, n-1, object);
    return object[[m,n]]
}