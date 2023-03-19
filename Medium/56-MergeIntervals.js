
function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0])// sorting by 1st digit helps 
    var prev = intervals[0]
    var result = [prev]
    for (var curr of intervals) {
        if (curr[0] <= prev[1]) { // overlap  
            prev[1] = Math.max(prev[1], curr[1]) // modifies referance...
        } else { // not overlap
            result.push(curr)
            prev = curr // reference is set here and modified on 8 if max is greater
        }
    }
    return result
}

merge([[1, 3], [2, 6], [8, 10], [15, 18]])
//[[1,6],[8,10],[15,18]]


/*
practice  3/19/2023
got really close with this one but couldnt quite get it.... logically sound...knew to sort but couldnt deal with pointers to the right place

really all we needed to do was save prev off at the end of each itteration and just compare curr to prev then at the end set prev to curr
*/

var merge = function (intervals) {
    let sorted = intervals.sort((a, b) => a[0] - b[0])
    let ansArray = []
    let prev = [sorted[0]];
    for (let i = 0; i < sorted.length; i++) {
        if (!sorted[i + 1]) {

        }

        else {

            if (prev[1] > sorted[i + 1][0]) {
                prev = [sorted[i][0], sorted[i + 1][1]]
            }


            if (prev[1] < sorted[i + 1][0]) {
                ansArray.push(prev);
            }
        }


    }

    return ansArray;
};


