var coinChange = function(coins, amount) {
    var result = target(coins, amount);
    if(result === Infinity){
        return -1;
    }else{
        return result;
    }
};

function target(coins, finalAmount, memo = {}){
    if(finalAmount === 0){
        return 0;
    }
    if(finalAmount < 0){
        return Infinity;
    }
    if(finalAmount in memo) {
        return memo[finalAmount]
    }
    var min  = Infinity;
    for(let coin of coins){
        var minChange  = 1 + target(coins, finalAmount - coin, memo)
        min  = Math.min(min, minChange );

    }
    memo[finalAmount] = min
    return min;
}