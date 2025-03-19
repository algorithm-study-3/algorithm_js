/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const answer = [];
	const hashMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		const needNum = target - nums[i]; // 1
		if (hashMap.has(needNum)) {
			answer.push(hashMap.get(needNum), i); // 3
		}
		hashMap.set(nums[i], i); // 2
	}
	return answer;
};

// 1. 구해야 할 값은 x(nums[x])+y(nums[y]) = target 인데, x = target-y 식으로도 변환이 가능했고, 우리가 찾을 값을 needNum에 저장시켰다.
// 2. 해시맵에 필요한 값이 없으면, key에는 값을 value에는 인덱스를 저장시켰다.
// 3. 해시맵에 필요한 값이 있으면, get으로 해당 값의 인덱스와 현재 인덱스를 answer 배열에 push로 저장시켰다.
