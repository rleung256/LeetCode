/*
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree/description/
 * https://www.youtube.com/watch?v=suj1ro8TIVY
 * 
 * think..how to process a single node...then defer the rest of the work   
 */
var serialize = function (root) {
    let string = '';

    function buildString(node) {
        // build with preorder traversal root->left->right
        if (!node) {
            string += 'e '; // if node is null  were going to replace with a symbol
        } else {
            string += node.val + ' '; //delimit with spaces for later
            buildString(node.left);
            buildString(node.right);
        }
    }

    buildString(root);

    return string; // 1 2 e e 3 4 e e 5 e e 
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let nodes = data.split(' '); // ['1', '2', 'e', 'e','3', '4', 'e', 'e','5', 'e', 'e', '']

    function buildTree() {
        let val = nodes.shift(); // essentially this is a queue...this is how the recursion will work

        if (val === 'e') { // if we see e we know it has to be changed to nuill
            return null;
        } else {
            let node = new TreeNode(Number(val)); // convert our string into a number
            node.left = buildTree(); // remember its going to go ALL the way left first so its going to go 1 -> 2-> NULL => RETURN => RETURN 
            node.right = buildTree(); // think of left and right as our defer do the same thing as we did to our node as we did to our left and right
            return node;
        }
    }

    return buildTree();
};

//serialize([1, 2, 3, null, null, 4, 5])

deserialize(['1', '2', 'e', 'e', '3', '4', 'e', 'e', '5', 'e', 'e', ''])