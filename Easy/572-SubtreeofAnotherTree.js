var isSubtree = function (root, subRoot) {
    function isSame(root1, root2) { // inner recursion to see if subtree = subtree
        if (!root1 && !root2) { // both roots have to be null to be the same tree
            return true
        }

        if (!root1 || !root2 || root1.val !== root2.val) { // if root values are different in any way either by values or by being null they are not the same tree
            return false;
        }

        return isSame(root1.left, root2.left) && isSame(root1.right, root2.right) // assert the same checks from above on both roots children
    }

    function dfs(node) {
        if (!node) {
            return false
        }

        if (isSame(node, subRoot)) {// if this returns true we have found a match
            return true
        }

        return dfs(node.left) || dfs(node.right) // or if either child is a subtree then it is a match
    }

    return dfs(root)
};