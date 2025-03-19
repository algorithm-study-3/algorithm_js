/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const answer = [];
	const obj = {
		")": "(",
		"}": "{",
		"]": "[",
	};

	for (let parentheses of s) {
		if (parentheses === "(" || parentheses === "{" || parentheses === "[") {
			answer.push(parentheses);
			continue;
		}
		// 1
		if (answer[answer.length - 1] === obj[parentheses]) {
			answer.pop();
		}
	}
	return answer.length === 0;
};

// 1. 만약, 배열의 마지막 값이 객체 키-값으로 확인 했을 때 다르다면 이미 답은 false로 정해졌기 때문에 바로 반환한다면 성능적으로 좀 더 우수할 것 같다.
