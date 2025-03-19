/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let sum = nums.reduce((a, b) => a + b, 0);
	let originnalSum = Array.from({ length: nums.length + 1 }, (_, i) => i).reduce((a, b) => a + b, 0);

	return originnalSum - sum;
};
