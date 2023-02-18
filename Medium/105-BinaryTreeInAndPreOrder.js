/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * //pre -> root->left->right
 * //inorder -> left -> root->right
 * // difficult - review needed...setting the () and [] for right and left really helps to break it down....lines 26 thru 28 are critical for finding solution
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

    function recurse(pStart, pEnd, inStart, InEnd) {
        // base case
        if (pStart > pEnd || inStart > InEnd) { // indexes of arrays...if the start point is ever greater than end we know were at the end
            return null;
        }

        let rootVal = preorder[pStart];// remember we can start here because we know pre order starts with ROOT so our initial value here is position 0 from our 1st invocation
        let inIndex = inorder.indexOf(rootVal); // so we take the root value of the pre order and we find the element in the in order tree.
        let nLeft = inIndex - inStart;  // number of nodes to the left of the root value in the in order array

        let root = new TreeNode(rootVal)

        root.left = recurse(pStart + 1, pStart + nLeft, inStart, InEnd - 1);
        root.right = recurse(pStart + 1 + nLeft, pEnd, inIndex + 1, InEnd);

        return root


    }
    return recurse(0, preorder.length - 1, 0, inorder.length - 1);
};

//preorder = [3, (9), [20, 15, 7]]
//inorder = [(9), 3, [15, 20, 7]] // parens is left subtree and [] are the right sub tree

//Output: [3, 9, 20, null, null, 15, 7]