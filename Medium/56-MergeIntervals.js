
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