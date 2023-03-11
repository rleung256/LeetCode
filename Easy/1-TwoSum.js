/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// essentially this is a math problem using the 2s compliment
var twoSum = function (nums, target) {
    let ansArr = []

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        if (compliment in ansArr) {
            console.log([ansArr[compliment], i])
        }

        ansArr[nums[i]] = i
    }


};


twoSum([11, 15, 2, 7], 9)


//alternative using an actual map seems like this is the DS to use

var twoSum = function (nums, target) {
    var map = new Map();

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (map.get(num) === undefined) {
            map.set(target - num, i);
        }
        else return [map.get(num), i];
    }
};



// study 3/11/23
//got the answer after using the in keyword...think this problem is best solved using a real map and not just an obj...
var twoSum = function (nums, target) {

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            return [map[nums[i]], i]
        }

        else {
            map[target - nums[i]] = i
        }


    }
};