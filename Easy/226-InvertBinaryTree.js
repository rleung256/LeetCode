/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * https://leetcode.com/problems/invert-binary-tree/
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {

    if (!root) return null;

    let temp = root.left; // save temp so we dont lose the ref
    root.left = root.right;
    root.right = temp;

    invertTree(root.right);

    invertTree(root.left);

    return root;
};

// look at every node swap their children
// 