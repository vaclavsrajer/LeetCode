class Solution {
    public int[] getConcatenation(int[] nums) {
        int numsLenght = nums.length;
        int[] returnNums = new int[numsLenght*2];
        for(int i = 0; i < numsLenght; i++){
            returnNums[i] = nums[i];
            returnNums[i+numsLenght] = nums[i];
        }
        return returnNums;
        
    }
}