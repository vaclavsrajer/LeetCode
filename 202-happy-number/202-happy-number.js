/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const object = {};
    while(n > 1){
        if(object[n]){
            return false;
        }else{
            let numbers = n.toString().split("");
            let sum = 0;
            for(const number of numbers){
                sum += parseInt(number) * parseInt(number);
            }
            object[n] = sum;
            n = sum;
        }
    }
    return n === 1;
};