/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let resMap = new Map();
    let ansArr = [];
    let dupeSet = new Set()
    for (let i = 0; i < strs.length; i++) {
        let sortedWord = strs[i].split('').sort().join() // after it's sorted we join it back together to one string...were going to do this for each word

        if (dupeSet.has(sortedWord)) { //can help to look at else first but the set tells us if we have seen this pattern or not
            let mapRef = resMap.get(sortedWord) // if we have get the word out of the map
            mapRef.push(strs[i]) // push onto the maps value referance
        }

        else {
            dupeSet.add(sortedWord) // if we have never seen the word add it to the set
            resMap.set(sortedWord, [strs[i]]) // create an entry in the map with the sorted word as the key and the regular unsorted word as a value within an array
        }
    }

    for (const [key, value] of resMap) { // need to do this to get vals out of map...you can use entries/values but you'll still need to itterate
        ansArr.push(value)
    }

    return ansArr
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
//[["bat"],["nat","tan"],["ate","eat","tea"]]


var groupAnagrams = function (strs) {

    let sorted = strs.map((str) => str.split('').sort().join(''))

    let map = {};

    for (let i = 0; i < sorted.length; i++) {

        if (!map[sorted[i]]) {
            map[sorted[i]] = [strs[i]];
        }

        else {
            map[sorted[i]].push(strs[i])


        }


    }
    return Object.values(map)
}