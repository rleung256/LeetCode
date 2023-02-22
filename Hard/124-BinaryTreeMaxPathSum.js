/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * https://www.youtube.com/watch?v=EK0A__Ri2Ms
 * 
 * dfs is whats needed here
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {


    let max = -Infinity // account for verrrry small nums


    function dfs(root) {// post traversal, left right root
        if (!root) {
            return 0;
        }

        let left = Math.max(0, dfs(root.left)) // make sure we dont return any values smaller than 0
        let right = Math.max(0, dfs(root.right))
        let curMax = left + root.val + right // total value of subtree in case the max is somewhere not at the top

        max = Math.max(curMax, max) // check out if curent max is higher than total maxxx

        return root.val + Math.max(left, right) // return the value of the root + whatever is larger left or right

    }

    dfs(root)

    return max

};