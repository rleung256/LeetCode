/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
 */
var isAnagram = function (s, t) {
    let firstWord = [...s];
    let secondWord = [...t];

    if (firstWord.length !== secondWord.length) {
        return false
    }

    firstWord = firstWord.sort()
    secondWord = secondWord.sort()

    for (let i = 0; i < firstWord.length; i++) {
        if (firstWord[i] !== secondWord[i]) {
            return false
        }
    }

    return true
};

isAnagram("anagram")