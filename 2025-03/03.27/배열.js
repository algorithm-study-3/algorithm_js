/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	s = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
	return s === s.split("").reverse().join("");
};
