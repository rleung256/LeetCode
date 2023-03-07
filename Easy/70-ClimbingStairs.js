/**
 * @param {number} n
 * @return {number}
 * https://leetcode.com/problems/climbing-stairs/
 * https://www.youtube.com/watch?v=Ifek5h5VqJw
 * 
 * //dp - bottom up approach
 * T:O(n)
 * S:o(n)
 * 
 * Insights:
 * intro to dp...easiest case of using the previous calc to inform the next...the trick with this one is literally writing out 
 * getting the answers for steps 1 and 2...this is how we end up with our base cases from there you can see a pattern emerge...should probably go further than 1 and 2 to see the pattern
 */
var climbStairs = function (n) {
    let dp = [];
    dp[1] = 1; // bc 1
    dp[2] = 2; // bc2

    for (i = 3; i <= n; i++) {
        //the pattern of the solution is that we can solve the next step by adding the values of the previous 2 steps together so i-1 and i -2
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}