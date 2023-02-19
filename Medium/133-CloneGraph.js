/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 * https://www.youtube.com/watch?v=RhyF7kGcHbw
 * https://leetcode.com/problems/clone-graph/description/
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {

    let visited = {}// map of visited nodes

    function dfs(node) {
        // base cases
        if (!node) { // if theres nothing in there return the original node
            return node;
        }

        if (!!visited[node.val]) { // look in visitited map for the current value of node
            return visited[node.val] // otherwise  return its value... this is what is returned to the neighbor in the for loop below
        }

        let root = new Node(node.val) // create a new node with the current val
        visited[node.val] = root; // create the copy of the new node and put it with the value in the visited array.... again this is what is put into neighbor array

        //recurrence relation
        for (let neighbor of node.neighbors) { // for each neighbor in the array do a dfs
            root.neighbors.push(dfs(neighbor))
        }

        return root//  this is actually what returns the node value to the array
    }
    return dfs(node)
};