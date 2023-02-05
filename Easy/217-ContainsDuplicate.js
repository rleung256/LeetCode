/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/contains-duplicate/
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */
var containsDuplicate = function (nums) {
    let dupeMap = new Set(); // classic set problem

    for (let i = 0; i < nums.length; i++) {
        if (dupeMap.has(nums[i])) {
            return true;

        }
        else {
            dupeMap.add(nums[i]);
        }
    }

    return false
};


containsDuplicate([1, 2, 3, 1])