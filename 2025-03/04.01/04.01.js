/*
I: 정수 배열 nums, 정수 target
O: nums에서 두 개의 수의 인덱스를 배열로 반환
C: 각 입력에는 정확히 하나의 정답만 존재, 같은 요소를 두 번 사용할 수 없음.
E: 항상 정답이 존재하므로 예외 처리는 필요 없음.

algo: 해시맵을 활용한 탐색
ds: Map (빠른 조회를 위해 사용)

solution:
1. map을 생성하여 이미 탐색한 숫자의 값과 인덱스를 저장
2. 배열을 순회하면서 `target - nums[i]` 값이 map에 있는지 확인
   - 있다면 정답을 반환
   - 없다면 현재 숫자를 map에 저장
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
};
