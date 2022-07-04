var coinChange = function(coins, amount) {
    var result = _coinChange(coins,amount)
    if(result === Infinity){
        return -1
    } else {
        return result
    }
};

var _coinChange = function(coins, amount, memo = {}){
    if(amount === 0) return 0
    if(amount < 0 ) return Infinity
    if(amount in memo) return memo[amount]
    
    var min = Infinity
    for(let coin of coins){
        var minChange = 1 + _coinChange(coins, amount - coin, memo)
        min = Math.min(min, minChange)
    }
    memo[amount] = min
    return min
}