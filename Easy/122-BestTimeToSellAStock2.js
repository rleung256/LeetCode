/**
 * @param {number[]} prices
 * @return {number}
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

basically, this one takes all of the positive differences whenever u can sell a stock...so basically if the price is higher than yesterdays
 you can sell for a profit and all those profits is the same compared to if you just bought on a valley and sold on a peak
 */
var maxProfit = function (prices) {

    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - prices[i - 1] > 0) {
            profit += prices[i] - prices[i - 1]
        }

    }

    return profit

};

maxProfit([7, 1, 5, 3, 6, 4])