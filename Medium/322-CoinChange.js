/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * https://leetcode.com/problems/coin-change/
 * https://www.youtube.com/watch?v=mSdNNaG5oPc
 * T: O(S * N) s = amount n = denomination count
 * S: O(N) n is amount to change
 * Insights
 * 
 */
var coinChange = function (coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);

    // base case

    dp[0] = 0;

    for (let curAmount = 1; curAmount <= amount; curAmount++) {
        for (let coin of coins) {
            if (curAmount - coin >= 0) {
                dp[curAmount] = Math.min(dp[curAmount], 1 + dp[curAmount - coin])
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};