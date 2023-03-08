/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 * https://www.youtube.com/watch?v=W61fIEQ9KhE
 *
 * Insights
 * So the trick to this one is the manditory o(n) time complexity....otherwise it would just be easy to sort and find the streak
 * This technique uses sets cleverly in order to filter out dupes and gets everything done in O(n)
 * 
 * T O(2n) or just O(n)
 * S O(n)
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums); // didn't realize you can just put an array into a set like this but you can
    let streak = 0;

    for (let num of set) {
        if (set.has(num - 1)) { // so this basically says if we have a number in our set that has one before it...its not the start of a streak EX n = 2 [1,2,3] ...3-1 is 2...so we know 3 isnt the start of a streak
            continue;
        }
        let currStreak = 1; // start at 1 because at this point we know we have a streak goin
        while (set.has(num + 1)) { // while a set has num+1 we know were streaking 
            currStreak++; // continue toincrement streak and num
            num++
        }
        streak = Math.max(streak, currStreak) // which streak is bigger
    }
    return streak;
};