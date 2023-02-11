/**
 * @param {number[]} height
 * @return {number}
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.

   Return the maximum amount of water a container can store.

   Remember that it's not height * height you need the area so line 19 is important
 */
var maxArea = function (height) {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxWater = 0;

    while (rightPointer != leftPointer) {
        let waterHeight = Math.min(height[leftPointer], height[rightPointer]);
        let waterWidth = Math.abs(leftPointer - rightPointer)
        let waterCapactiy = waterHeight * waterWidth;

        if (waterCapactiy > maxWater) {
            maxWater = waterCapactiy;
        }

        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++;
        }
        else {
            rightPointer--;
        }
    }

    return maxWater;

};


maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
// 49