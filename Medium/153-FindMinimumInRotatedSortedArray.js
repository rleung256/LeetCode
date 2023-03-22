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

/*
 practice 3/21/23 
 I knew what i had to do, messed up a couple things...firstly the iteration...in BS you can just use your pointers as the delimiters.... secondly the return...this returns the left pointer but i think
 you could also just keep track of a var if you arnt that clever...
*/

var findMin = function (nums) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;

    while (nums[leftPointer] > nums[rightPointer]) {
        const midPoint = Math.floor((leftPointer + rightPointer) / 2);

        if (nums[midPoint] > nums[rightPointer]) {
            leftPointer = midPoint + 1;
        }

        else {
            rightPointer = midPoint
        }

    }

    return nums[leftPointer]
};
