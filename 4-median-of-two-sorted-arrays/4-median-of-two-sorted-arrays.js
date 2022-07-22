/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const half = Math.floor(totalLength / 2);
    
    if(nums1.length > nums2.length){
        const temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    
    let left = 0;
    let right = nums1.length - 1;
    
    while(true){
        let nums1Mid = Math.floor((left + right) / 2);
        let nums2Mid = half - nums1Mid - 2;
        
        let nums1Left = nums1Mid >= 0 ? nums1[nums1Mid] : -Infinity;
        let nums1Right = nums1Mid + 1 < nums1.length ? nums1[nums1Mid + 1] : Infinity;
        let nums2Left = nums2Mid >= 0 ? nums2[nums2Mid] : -Infinity;
        let nums2Right = nums2Mid + 1 < nums2.length ? nums2[nums2Mid + 1] : Infinity;
        
        if(nums1Left <= nums2Right && nums2Left <= nums1Right){
            if(totalLength % 2){
                return Math.min(nums1Right, nums2Right);
            }
            return (Math.max(nums1Left, nums2Left) + Math.min(nums2Right, nums1Right)) / 2;
        }
        else if(nums1Left > nums2Right){
            right = nums1Mid - 1;
        }else{
            left = nums1Mid + 1;
        }
        
    }
};