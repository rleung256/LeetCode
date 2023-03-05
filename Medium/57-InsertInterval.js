/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * https://leetcode.com/problems/insert-interval/
 * https://www.youtube.com/watch?v=mUvCAk3_ms8
 */
var insert = function (intervals, newInterval) {
    let res = [];
    let i = 0;

    const start = 0;
    const end = 1;

    while (i < intervals.length && intervals[i][end] < newInterval[start]) { // so leading up to the new intervals start point... we can just push in values
        res.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][start] <= newInterval[end]) { //while the start position of the interval array is less than or equal to the end of the new interval...meaning while we have overlap
        newInterval[start] = Math.min(newInterval[start], intervals[i][start]); // take the lesser of the two start positions meaning furthest back
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]);// take the greatest of the endpoints
        i++;
    }

    res.push(newInterval); //the above loop will continue until we have handled all of the overlaps and we will push in one merged interval

    while (i < intervals.length) { // push the rest of the intervals into the res array
        res.push(intervals[i]);
        i++;
    }

    return res

};