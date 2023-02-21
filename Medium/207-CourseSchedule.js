/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * https://www.youtube.com/watch?v=FN9Q9DmVH_Y
 * https://leetcode.com/problems/course-schedule/
 */
var canFinish = function (numCourses, prerequisites) {
    let adjList = {};
    let visited = new Set();
    for (let [a, b] of prerequisites) { // this is our adjacency list from B->A ... a needs to have b inorder to be taken
        if (!adjList[a]) { // if its not in the list put it in the list
            adjList[a] = [b]; // as an array
        }
        else {
            adjList[a].push(b) // otherwise it exists and we add it to the list of dependencies
        }
    }

    function dfs(curr) { // checking for cycles
        if (visited.has(curr)) {
            return false; // we dfs and if the visited array still has the value...that means were in a cycle
        }

        if (adjList[curr] === []) {// this means the course can be completed because theres nothing in the dependency array
            return true
        }

        visited.add(curr) // then we say this node is visited 

        if (adjList[curr]) { // and check the value of neighbours
            for (let neigh of adjList[curr]) {
                if (!dfs(neigh)) {
                    return false
                }
            }
        }
        visited.delete(curr); // once weve validated above because of line 34 we know its valid for now we can delete our visited
        adjList[curr] = []; // and then remove the dependency

        return true

    }

    for (let key in adjList) { // loop thru keys in the adj list and run dfs on each
        if (!dfs(key)) {
            return false;
        }
    }
    return true
};