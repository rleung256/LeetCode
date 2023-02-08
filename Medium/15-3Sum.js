/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://www.youtube.com/watch?v=2sgT3XXdWEQ
 */
var threeSum = function (nums) {
    if (nums.length === 0) {
        return []
    }
    let res = []

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) { // -2 because of the 2 pointers j and k that will be in front

        // stop duplicates from occuring
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // 2 pointers
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {// 2 pointer loop
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {  // found our target
                res.push([nums[i], nums[j], nums[k]])
                //stop duplicates
                while (nums[j] === nums[j + 1]) { j++ }
                while (nums[k] === nums[k - 1]) { k-- }

                j++
                k--
            } else if (sum < 0) {// if your sum is less than zero you need to move the left pointer foreward...remember the array is sorted
                j++
            } else {
                k--
            }
        }
    }

    return res

};

threeSum([-1, 0, 1, 2, -1, -4])