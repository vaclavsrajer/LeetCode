class Solution {
    public int[] buildArray(int[] nums) {
        int[] permutation = new int[nums.length];
        for(int i = 0; i < nums.length; i++){
            permutation[i] = nums[nums[i]];
        }
        return permutation;
    }
}