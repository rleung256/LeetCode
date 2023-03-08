/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * https://leetcode.com/problems/word-search-ii/
 * https://www.youtube.com/watch?v=iQuw7mID_30&t=441s
 * 
 * Insights
 * This problem combines the techiniques of several other problems into one...its pretty tricky. I couldnt figure out how to 'remember' where we've been when doing a dfs
 * we use a trie to figure out if were looking at a valid word or not, dfs to traverse those words just, then we change the char to a # to remember where weve been....then after all that
 * we change the # back to its original value
 * 
 */
var findWords = function (board, words) {
    let result = [];
    let root = buildTrie(words);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(root, i, j, result, board) // we conduct dfs on every node
        }
    }
    return result
};

function dfs(node, i, j, result, board) {
    if (node.word) {
        result.push(node.word); // we know  weve found a word... it goes into our results
        node.word = null; // get rid of word  because we can't have dupes
    }
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return; // is our value in bounds
    if (!node[board[i][j]]) return; // if the board position isnt in our trie....then its not in our path and we can move on

    let c = board[i][j]; // referance used down below to reset
    board[i][j] = '#'; // prevent backtracking base case will return if it sees this value

    dfs(node[c], i + 1, j, result, board) // dfs all directions
    dfs(node[c], i - 1, j, result, board)
    dfs(node[c], i, j + 1, result, board)
    dfs(node[c], i, j - 1, result, board)
    board[i][j] = c
}

function buildTrie(words) {
    let root = {}; // tries are just objects

    for (let word of words) {
        let currNode = root; // create a referance to root, remember this is just the "top" of our trie so each word starts at the top and is built out ex:A

        for (let char of word) {
            if (!currNode[char]) {
                currNode[char] = {}; // if the key doesnt exit we create it so below we can assign it
            }
            currNode = currNode[char];
        }
        currNode.word = word; // basically this is 'isword' from the trie probelm so we can explicitly check in our dfs func if this is a match
    }
    return root;
}

/**
*A - node
*     /\
*    d  a
*   /    \
*  a      n
* /        \
*d          t  
*/