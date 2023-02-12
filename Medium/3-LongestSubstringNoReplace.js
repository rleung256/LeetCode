/**
 * @param {string} s
 * @return {number}
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */
var lengthOfLongestSubstring = function (s) {
    let leftPointer = 0;
    let rightPointer = 0;// sliding window

    let charSet = new Set();
    let largestString = 0;

    while (rightPointer < s.length) {
        if (charSet.has(s[rightPointer])) { // the value is in our set
            charSet.delete(s[leftPointer]); // delete the char at the start of the string
            leftPointer++; // slide window 
        }

        else {
            charSet.add(s[rightPointer]); // the value is NOT in our set
            if (rightPointer - leftPointer + 1 > largestString) { // right - left + 1 is the length of our string...is it greater than our current longest
                largestString = rightPointer - leftPointer + 1; // it is greater so update longest string
            }
            rightPointer++; // then slide window foreward 

        }

    }
    return largestString

};

lengthOfLongestSubstring("abcabcbb");
// 3
