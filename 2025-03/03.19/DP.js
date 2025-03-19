/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let profit = 0;
	let minPrices = prices[0];

	for (let i = 1; i < prices.length; i++) {
		minPrices = Math.min(minPrices, prices[i - 1]);
		profit = Math.max(prices[i] - minPrices, profit);
	}
	return profit;
};
