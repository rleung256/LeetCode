// Sort by the end. Given [ a ] [ b ] remove b, if b[0] < a[1] 
// https://leetcode.com/problems/non-overlapping-intervals/
const eraseOverlapIntervals = (intervals) => {
    intervals.sort((a, b) => a[1] - b[1]); // ascending order wrt the end...this is important otherwise you'll end up with more of a count than otherwise would have
    let prev = null;
    let counter = 0;
    intervals.forEach((item) => {
        if (!prev) {
            prev = item; // if we dont wanna do this we can just use a for loop and start at index 1 and assign prev right away
        }
        else {
            if (prev[1] > item[0]) {// if previous positions ending overlaps with current items start we want to remove
                counter++;
            }
            else {
                prev = item;
            }
        }
    });
    return counter;
}