/*
  Just need to remember 2 pointer approach and then the logic for this one is easy.
*/
var findMin = function (nums) {
    if (nums.length === 1) {
        return nums[0]
    }

    let leftPointer = 0;
    let rightPointer = nums.length - 1
    let minOfArray = Infinity;


    while (leftPointer !== rightPointer) {
        if (nums[leftPointer] <= nums[rightPointer]) {
            if (nums[leftPointer] < minOfArray) {
                minOfArray = nums[leftPointer];
            }
            rightPointer--;
        }
        else {
            if (nums[rightPointer] < minOfArray) {
                minOfArray = nums[rightPointer];
            }
            leftPointer++
        }
    }

    return minOfArray;
};
findMin([3, 4, 5, 1, 2])
 //1
