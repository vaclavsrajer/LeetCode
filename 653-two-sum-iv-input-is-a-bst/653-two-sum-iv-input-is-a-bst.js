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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const object = {};
    return searchForAll(root, k);
    
    function searchForAll(root, k){
        if(root === null){
            return false;
        }
        if(!isNaN(object[root.val])){
            return true
        }
        object[k - root.val] = root.val;
        return searchForAll(root.left, k) || searchForAll(root.right, k);
    }
    
    
};
