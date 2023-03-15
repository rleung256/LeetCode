/*
study 3/14/2023
I know this problem well....use a "map" this time for fun. i think it needs to be an obj to have better retrieval time but its an array of 3 chars so i thought its ok.  
I need to get better at determining when to use IN vs includes for arrays vs objects...ill just keep practicing using those in these challenges...otherwise. Everything was pretty much correct.....needed to check if things were still in the stack though

*/


var isValid = function (s) {

    if (s.length === 1) {
        return false;
    }

    let pushMap = [
        '(', '{', '['
    ]

    let stacky = [];

    for (let i = 0; i < s.length; i++) {
        if (pushMap.includes(s[i])) {
            stacky.push(s[i]);
        }

        else {
            if (s[i] === '}') {
                if (stacky.pop() === '{') {
                    continue;
                }
                else return false;
            }
            if (s[i] === ')') {
                if (stacky.pop() === '(') {
                    continue;
                }
                else return false;
            }
            if (s[i] === ']') {
                if (stacky.pop() === '[') {
                    continue;
                }
                else return false;
            }
        }
    }
    if (stacky.length > 0) return false
    return true
};


isValid('()')