/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
   const object= {};
    for(let number of arr1){
        if(object[number]){
            object[number]++;
        }else{
            object[number] = 1;
        }
    }
    
    const returnArray = [];
    for(let anotherNumber of arr2){
        if(object[anotherNumber]){
            while(object[anotherNumber]){
                object[anotherNumber]--;
                returnArray.push(anotherNumber);
            }
        }
    }
    
    const lastArray = [];
    for(let key of Object.keys(object)){
        if(object[key]){
            while(object[key]){
                lastArray.push(key);
                object[key]--;
            }
        }
    }
    
    lastArray.sort((a,b) => a-b);
    
    
    return [...returnArray, ...lastArray];
};