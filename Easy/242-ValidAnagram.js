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


// study 3/12/23
// original solution was riddled with simple mistakes, overall solution was good...technically faster than the above since it doesnt sort this is done in o(n)
// some mistakes included: not referencing the position of s and t, not checking for lengths that are diff, using post increment and decrement, not  using IN, and trying to iterate over an obj without using entries
var isAnagram = function (s, t) {

    let map = {};

    if (s.length != t.length) return false;

    for (i = 0; i < s.length; i++) {

        if (s[i] in map) {

            map[s[i]] = map[s[i]] + 1;
        }
        else {
            map[s[i]] = 1;
        }
    }

    for (j = 0; j < t.length; j++) {
        if (!map[t[j]]) {
            return false;
        }
        else {
            map[t[j]] = map[t[j]] - 1;
        }


    }

    for (entry of Object.entries(map)) {
        if (entry > 0) return false
    }
    return true;

};

isAnagram("anagram", 'nagaram')
