var countSubstrings = function (s) {
    let count = 0;
    let len = s.length;

    for (let i = 0; i < len; i++) { // pivot 
        count++; // this is every single letter is a palindrome

        let left = i - 1;
        let right = i + 1;
        while (left >= 0 && right < len && s[left] == s[right]) { // this handles odd length palindroms

            count++;
            left--;
            right++;
        }
        left = i;
        right = i + 1;
        while (left >= 0 && right < len && s[left] == s[right]) { // this handles the even palindroms
            count++;
            left--;
            right++;
        }
    }
    return count;
};
countSubstrings('aaa')
// 6