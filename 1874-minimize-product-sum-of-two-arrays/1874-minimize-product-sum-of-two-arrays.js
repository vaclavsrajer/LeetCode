/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
    const sortedNum1 = nums1.sort((a, b) => a - b);
    const sortedNum2 = nums2.sort((a, b) => b - a)
    let sum = 0;
    for(let i = 0; i < sortedNum1.length; i++){
        sum += sortedNum1[i] * sortedNum2[i]
    }
    return sum;
};