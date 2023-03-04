var MedianFinder = function () {
    this.arr = []; // using array
};

/** 
 * @param {number} num
 * @return {void}
 * 
 * Insights
 * the way I was thinking of this challenge it can techincally be done...you can just sort but the leetcode crazy test cases exceed the timelimit
 * this is why we do the binary search here...this knocks the finding the midpoint with the num  down to logn....and the insertion to n
 * Otherwise the res of this challenge is very easy to comprehend
 */
MedianFinder.prototype.addNum = function (num) {
    // this.arr.push(num);
    // this.arr.sort((a, b) => a-b) // this will get you n*logn which doesnt pass the check but it does work


    let left = 0;
    let right = this.arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (this.arr[mid] < num) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    this.arr.splice(left, 0, num)// first param is index where we are passing the value into , 2nd is how many items to remove, third param what were inserting
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {  // even

    if (this.arr.length % 2 === 0) {

        let mid = this.arr.length / 2;
        return (this.arr[mid] + this.arr[mid - 1]) / 2
    }
    else { // odd
        let mid = Math.floor(this.arr.length / 2);
        return this.arr[mid]
    }

};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 // [1,2,3,4,5,]