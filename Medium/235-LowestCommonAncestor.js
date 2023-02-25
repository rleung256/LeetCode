/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/1347857/c-java-python-iterate-in-bst-picture-explain-time-o-h-space-o-1/
 * 
 * Insights and Base cases
 * Remember that the LCA can be itself...this happens when the root val is either larger than the low and high AND when root val is smaller than both high and low...
 * in these cases with the solution below the lca will be itself and a connected left or right...otherwise the lca will be the root and its children will be p and q aka low and high
 * 
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    let low = Math.min(p.val, q.val);// get low and high vals
    let high = Math.max(p.val, q.val);
    while (root !== null) {

        if (root.val > high) { // if root.val is greater than max we go left(lower values in  left tree)
            root = root.left;
        }
        else if (root.val < low) {
            root = root.right;
        }

        else {
            return root;
        }
    }
    return null; // return null if we never loop

};