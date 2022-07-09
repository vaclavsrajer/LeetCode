/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let count = 1;
    
    for(let i = digits.length -1 ; i >= 0; i--){
        if(count === 1){
            if(digits[i] + 1 > 9){
                digits[i] = 0;
            }else{
                digits[i]++;
                count--;
            }
        }
        if(count === 1 && i === 0){
            return Array.of(1, ...digits);
        }
    }
    return digits;
};