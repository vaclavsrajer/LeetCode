/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftMin = 0;
    let leftMax = 0;
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === "("){
            leftMin++;
            leftMax++;
        }
        else if(s[i] === ")"){
            leftMin--;
            leftMax--;
        }else if(s[i] === "*"){
            leftMin--;
            leftMax++;
        }
        if(leftMin < 0){
            leftMin = 0;
        }
        if(leftMax < 0){
            return false;
        }
    }
    
    return leftMin === 0 || leftMax === 0;
};