//https://www.youtube.com/watch?v=i1m-rywzw68

var isValidBST = function (root) { // this is a question of bounds ... the root starts at neg and pos infinity because the problem states values can be from 2^31 andd -2^31
    // the logic of this one LOOKS easy but actually is hard to come up with 

    function recurse(root, min, max) { // think of this as min lower bound and max upper bound
        if (root === null) {// an empty tree is valid
            return true
        }

        if (root.val >= max || root.val <= min) { // check our range...left tree  passes -inifinity and right pos infinity to start 
            return false

        }

        return recurse(root.left, min, root.val) && recurse(root.right, root.val, max) //on left our lower bound is neg inifinity our upper bound is the parent node
    }
    return recurse(root, -Infinity, Infinity)



}

// root.val = 3
// min = 2
// max infin