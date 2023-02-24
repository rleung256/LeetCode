/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 * https://www.youtube.com/watch?v=RhyF7kGcHbw
 * https://leetcode.com/problems/clone-graph/description/
 * reviewed 2/24/23
 */

/**
 * @param {Node} node
 * @return {Node}
 * 
 * dfs base cases and insights
 * I think the hardest part of this problem is figuring out what to return
 * We need a way to to tell if we've been somewhere so we dont get caught in a loop of going back and forth
 * -if (node === null) return node
 * -if (visted[node.val] != null) return visted[node.val]...weve already visited so we can return the value
 */
var cloneGraph = function (node) {

    let visited = {}// map of visited nodes

    function dfs(node) {
        // base cases
        if (!node) { // if theres nothing in there return the original node
            return node;
        }

        if (!!visited[node.val]) { // look in visitited map for the current value of node
            return visited[node.val] // otherwise  return its value... this is what is returned to the neighbor in the for loop below...look line 40 where neighbors pushes result of dfs
        }

        let root = new Node(node.val) // create a new node with the current val
        visited[node.val] = root; // create the copy of the new node and put it with the value in the visited array.... again this is what is put into neighbor array

        //recurrence relation
        for (let neighbor of node.neighbors) { // for each neighbor in the array do a dfs
            root.neighbors.push(dfs(neighbor))// this is how we fill our neighbors array....we perform dfs on each neighbor as stated above and we know it is based on line 33
        }

        return root//  this is actually what returns the node value to the array
    }
    return dfs(node)
};

// T - o(n+e) n = nodes and e  = edges
// S - o(v) v = values we store in visited