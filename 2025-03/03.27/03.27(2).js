/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);

  const result = [];

  nums.forEach((num, index) => {
    if (num === target) result.push(index);
  });

  return result;
};
