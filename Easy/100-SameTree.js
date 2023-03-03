/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * Insights
 * This one is pretty easy...if you think of the base cases theres really  nothing to it
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    if (!p && !q) { // both end up null here then were at the bottom of the same tree node
        return true
    }

    if ((!p && q) || (p && !q)) { // if one is null and the other is not then its not the same tree
        return false
    }
    if (p.val !== q.val) { // if their values differ then it's not the same tree
        return false
    }


    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right) // traverse both left and right and both must return true to be the same tree

}

