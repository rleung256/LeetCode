var Trie = function () {
    this.root = {} // initialize trie obj...meaning our tree
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root; // get a referance

    for (let c of word) {  // loop thru chars of word
        if (node[c] == null) {
            node[c] = {};  // if it doesnt exist in our structure we need to create an object to hold the reference were creating below on line 16
        }
        node = node[c];

    }
    node.isWord = true; // we have created a word
};

Trie.prototype.traverse = function (word) {
    let node = this.root; // get our structure

    for (let c of word) {
        node = node[c];
        if (node == null) { // go thru our structure examining each key...if we hit a key that is null we know it is not there
            return null;
        }
    }
    return node; // otherwise return the end of the word
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.traverse(word); // find the word
    return node !== null && node.isWord === true; // return true only if we dont get null from our func AND that its not a full word
    // for example we put in apple, position e has isWord true...IF we search for app...traverse will return with trie[p] BUT will not have isWord true
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.traverse(prefix); // this is different from search only in that we dont care about isWord here so we return true if it exists within our structure

    return node !== null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 * https://www.youtube.com/watch?v=AcFHT2l1b3E&t=290s
 * 
 * Insights
 * think of this as a tree where each letter is a node and along that tree the very end of a word in that tree is set to isWord
 * so as you traverse the input if you stop on an isWord node, you know that's in the tree already
 * 
 * Insert is the most challenge here...once you can figure out how to do that it gets much easier...adding a helper for traverse is also huge
 */