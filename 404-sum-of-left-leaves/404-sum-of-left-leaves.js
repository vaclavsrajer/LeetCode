/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const stack = [];
    stack.push(root);
    while(stack.length > 0){
        const stackValue = stack.pop();
        if(stackValue.left !== null && stackValue.left.left === null && stackValue.left.right === null){
            sum+= stackValue.left.val
        }
        if(stackValue.left !== null){
            stack.push(stackValue.left);
        }
        if(stackValue.right !== null){
            stack.push(stackValue.right);
        }
    }
    
    return sum;
};