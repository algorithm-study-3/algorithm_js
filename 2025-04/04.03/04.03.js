/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    if (digits[i] === 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      return digits;
    }
  }
  return [1, ...digits];
};
