/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

var maxProfit = function (prices) {

    let min = Infinity;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        }

        if (prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }

    return profit;
};

maxProfit([7, 1, 5, 3, 6, 4])


// study 3/11/23
// 2 silly mistakes, otherwise i had it perfectly
var maxProfit = function (prices) {
    var profit = 0;
    var min = prices[0];

    for (i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);

        profit = Math.max(profit, prices[i] - min)

    }
    if (profit < 0) return 0
    return profit

};

