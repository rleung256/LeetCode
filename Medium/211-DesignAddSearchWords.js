var WordDictionary = function () {
    this.trie = {}; // remember for class we have to use this.
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.trie; // need to referance it

    for (let char of word) {
        if (node[char] == null) {
            node[char] = {} // if its not in the trie we create it
        }
        node = node[char]; // move into the node we just created
    }
    node.isEnd = true;

};
WordDictionary.prototype.dfs = function (word, trie, index) {
    // base case
    if (word.length === index) { // at this point we've reached the end of the passed word...do we find a set flag or not
        return trie.isEnd ? true : false
    }

    let char = word[index] // we'll use this to check if we have a . or not

    if (char === ".") { // we found a wild card so now we need to loop through all keys at this depth to see if we find a solution
        for (let key in trie) {
            if (this.dfs(word, trie[key], index + 1)) { // we increase the index as were progressing a level deeper
                return true
            }
        }
    }
    else {
        if (trie[char] != null) { // no wild card, progress as normal since it's not a . we need to make sure the letter exists in our trie first
            return this.dfs(word, trie[char], index + 1)
        }
    }
    return false
}
/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {

    return this.dfs(word, this.trie, 0) // the start at zero 
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)\
 * insights
 * This problem is very similar to a base trie..The trick is figuring out how to deal with the wildcard....
 * this is trivialized by looping through the keys at that level and also passing an index to realize how deep you are
 * try to think of the depth and what that means for the data structure...drawing out the structure helps alot

 https://www.youtube.com/watch?v=zDyoxl29yns
 */