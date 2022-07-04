/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const object = {};
    for(let i = 0; i < indices.length; i++){
        if(isNaN(object[indices[i]])){
            object[indices[i]] = s[i];
        }
    }
    let newString = "";
    for(let j = 0; j < indices.length; j++){
        newString += object[j];
    }
    return newString;
    
};