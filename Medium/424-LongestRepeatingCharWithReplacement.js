/*
https://leetcode.com/problems/longest-repeating-character-replacement/
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.


*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};

    while (right < s.length) { // we stop once right char has reached the end of the string
        const char = s[right];
        visited[char] = visited[char] ? visited[char] + 1 : 1; // add to map if we havent seen it otherwise increment occurance

        if (visited[char] > maxCharCount) {
            maxCharCount = visited[char]; // we now check if the new thing we JUST added has the most occurances
        }

        if (right - left + 1 - maxCharCount > k) { // check to see if our window formula - length of string MINUS the most prev char...are there more replacements then we have...if so we have to remove left pointer char from map
            // the right - left + 1 is simply the length of the substring
            visited[s[left]]--;
            left++;
        }

        right++;
    }

    return right - left;
};


characterReplacement('ABAB', 2)
// 4

/**
 Practice 3/22/23
Fail
Sort of knew what to do.. had the 2 pointer approach, even knew pretty much how to move them and had the right iteration technique.
Just couldnt put it all together...what I messed up was tracking the current max...but honestly was just as I thought....just didnt do it.

Also the formula to calculate whether we want to remove from end of list was a little wacky too....close but  I think I would fail in an interview
 */
var characterReplacement = function (s, k) {

    let length = 0;
    let maxChar = 0;
    let backPointer = 0;
    let frontPointer = 0;

    let map = new Map();

    while (frontPointer < s.length) {

        const curr = s[frontPointer];

        if (map.get(curr)) {
            map.set(curr, s[backPointer + 1])
        }
        else {
            map.set(curr, 1)
        }

        if (maxChar < map.get(curr)) maxChar = map.get(curr)

        if (frontPointer - backPointer - maxChar - k >= 0) {
            map.set(s[backPointer], map.get(s[backPointer])--)
            backPointer++
        }

        frontPointer++;
    }
    return frontPointer - backPointer;

};


const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let maxCharCount = 0;
    const visited = {};

    while (right < s.length) { // we stop once right char has reached the end of the string
        const char = s[right];
        visited[char] = visited[char] ? visited[char] + 1 : 1; // add to map if we havent seen it otherwise increment occurance

        if (visited[char] > maxCharCount) {
            maxCharCount = visited[char]; // we now check if the new thing we JUST added has the most occurances
        }

        if (right - left + 1 - maxCharCount > k) { // check to see if our window formula - length of string MINUS the most prev char...are there more replacements then we have...if so we have to remove left pointer char from map
            // the right - left + 1 is simply the length of the substring
            visited[s[left]]--;
            left++;
        }

        right++;
    }

    return right - left;
};