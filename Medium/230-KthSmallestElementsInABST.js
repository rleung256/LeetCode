/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
Insights:
-Two things to look for in order to trivialize this problem...realize that bst's are inOrder left -> root -> right
and secondly if we just store this into an array we'll have a way to pull the smallest values easily
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let arr = []; // this will contain our array based bst
    inOrder(root, arr); // use our inorder traversal
    return findKth(arr, k); // loop through array k  - 1 times to find element
};

function inOrder(root, arr) {

    if (!root) { // base case is if node doesnt exist...return
        return
    }

    // next 3 lines is our in order traversal
    inOrder(root.left, arr) // remember that this will go ALL the way left in a bst tree first before making it to the next line
    arr.push(root.val); // in example 1: 1(root because left is null) will be the first element pushed into the array followed by 2(right)...then  will return to 3 push 3 then go right to push 4 leaving us with the array [1,2,3,4]
    inOrder(root.right, arr)
    //        3
    //         /\
    //              1  4
    //               \
    //                2
}

function findKth(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (i === k - 1) { // we go to k -1 because of arrays being 0 based index
            return arr[i]
        }
    }
}