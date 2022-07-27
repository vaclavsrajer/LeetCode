/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length < 2 && !s.match(/[^a-z0-9]/gi)){
        return true;
    }
    let regExp = /[^a-z0-9]/gi;
    let onlyLetters = s.toLowerCase().replace(regExp, '');
    
    let left = 0;
    let right = onlyLetters.length-1;
    while(left <= right){
        if(onlyLetters[left] === onlyLetters[right]){
            left++;
            right--;
        }else{
            return false;
        }
    }
    return true;
};