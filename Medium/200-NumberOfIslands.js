/**
 * @param {character[][]} grid
 * @return {number}
 * https://leetcode.com/problems/number-of-islands/
 */
const numIslands = (grid) => {

    const dfs = (x, y) => {
        if (grid[x][y] === '1') {
            grid[x][y] = '0';
        }
        else {
            return; // we should find a island if we dont we should be done looking and dont need to dfs again
        }

        if (x < grid.length - 1) {
            dfs(x + 1, y)// down
        }
        if (x > 0) {
            dfs(x - 1, y) // up
        }

        if (y < grid[x].length - 1) {
            dfs(x, y + 1) // right
        }
        if (y > 0) {
            dfs(x, y - 1) // left
        }


    }


    let islands = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                islands++;
                dfs(i, j)
            }
        }
    }

    return islands
}

numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "1"]
])


/*
    Input: grid = [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
      ]
      Output: 1
};

*/

