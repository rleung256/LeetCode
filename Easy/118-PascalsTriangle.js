/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]

    let triangle = [[1], [1, 1]]


    for (let i = 1; i < numRows - 1; i++) {
        let tempArray = triangle[i]
        let newArray = [1]

        for (let j = 0; j < tempArray.length - 1; j++) {
            newArray.push(tempArray[j] + tempArray[j + 1])
        }
        newArray.push(1)
        triangle.push(newArray)
    }
    return triangle
};

// practiced 3/17/2023
/*
I had the right idea but wasnt able to calculate the inner body of the triangle....also i was using a while loop in the outer loop preventing me from accessing the ans  array
*/