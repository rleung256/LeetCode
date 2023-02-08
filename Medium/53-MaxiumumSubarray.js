/**
 * @param {number[]} nums
 * @return {number}
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 */
var maxSubArray = function (nums) {

    let currentSubArrayValue = nums[0]
    let maxSubArrayValue = nums[0]

    if (nums.length === 1) {
        return nums[0]
    }

    for (i = 1; i < nums.length; i++) {    // start with the 2nd entry in the array
        let currentNum = nums[i]
        //currentSubArrays job is to act as a sum over the array.  The next line essentially checks if its better to start the array over again or keep adding to it in case we find larger nums down the array
        currentSubArrayValue = Math.max(currentNum, currentSubArrayValue + currentNum) // is the current value of our subArray PLUS the next value larger than just the next value
        if (currentSubArrayValue > maxSubArrayValue) {
            maxSubArrayValue = currentSubArrayValue  // if the added value is larger add it to the array
        }
    }

    return maxSubArrayValue
    //o(n) time
    //o(1) space


};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);