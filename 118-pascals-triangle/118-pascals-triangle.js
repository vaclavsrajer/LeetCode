/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const array = [[1]];
    for(let i = 0; i < numRows-1; i++){
        const helperArray = Array.of(1);
        for(let j = 0; j < array.length-1; j++){
            helperArray.push(array[i][j] + array[i][j+1])
        }
        helperArray.push(1);
        array.push(helperArray);
    }
    return array;
};