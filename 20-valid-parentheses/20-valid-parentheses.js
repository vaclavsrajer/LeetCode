/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length < 2){
        return false;
    }
    
    const stack = [];
    const object = {")":"(", "]" : "[", "}" : "{"};
    
    for(let i = 0; i < s.length; i++){
        if(object[s[i]]){
            if(stack.length > 0 && object[s[i]] === stack[stack.length-1]){
                stack.pop();
            }else{
                return false;
            }

        }else{
            stack.push(s[i]);
        }
    }
    
    if(stack.length > 0){
        return false;
    }

    return true;
};