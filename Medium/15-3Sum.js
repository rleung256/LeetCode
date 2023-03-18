/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://www.youtube.com/watch?v=2sgT3XXdWEQ
 */
var threeSum = function (nums) { // zero is the target here see line 27
    if (nums.length === 0) {
        return []
    }
    let res = []

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) { // -2 because of the 2 pointers j and k that will be in front

        // stop duplicates from occuring
        if (nums[i] === nums[i - 1]) { // this is checking the previous index if its the name as the current...we can skip
            continue;
        }

        // 2 pointers
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {// 2 pointer loop
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {  // found our target
                res.push([nums[i], nums[j], nums[k]])

                while (nums[j] === nums[j + 1]) { j++ }   //stop duplicates
                while (nums[k] === nums[k - 1]) { k-- }   //stop duplicates

                j++// we move both pointers because we dont want dupes
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

/* 3/18/2023 practice
remember at its heart its a two pointer tech...that means you have to sort.... and remember to check for dupes by checking either i -1 or j + 1
lastly remember if sum is greater than  0 we want to move right pointer left because the list is sorted and visa versa for less than zero
*/