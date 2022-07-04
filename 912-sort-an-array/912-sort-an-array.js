/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1){
        return nums;
    }
    
    let half = Math.floor(nums.length/2);
    const list1 = sortArray(nums.slice(half, nums.length));
    const list2 = sortArray(nums.slice(0, half));
    return mergeSort(list1, list2);
};


function mergeSort(list1, list2){
    const sortedArray = [];
    let sortedArrayIndex = 0;
    let list1Index = 0;
    var list2Index = 0;
    
    while(list1.length > list1Index && list2.length > list2Index){
        if(list1[list1Index] > list2[list2Index]){
            sortedArray[sortedArrayIndex] = list2[list2Index];
            sortedArrayIndex++;
            list2Index++;
        }else {
            sortedArray[sortedArrayIndex] = list1[list1Index];
            sortedArrayIndex++;
            list1Index++;
        }
    }
    
    while(list1.length > list1Index){
        sortedArray[sortedArrayIndex] = list1[list1Index];
        sortedArrayIndex++;
        list1Index++;
    }
    while(list2.length > list2Index){
        sortedArray[sortedArrayIndex] = list2[list2Index];
        sortedArrayIndex++;
        list2Index++;
    }
    return sortedArray;
    
}