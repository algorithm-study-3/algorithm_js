/*
I: 오름차순으로 정렬된 정수 배열 nums, 정수 target
O: nums에서 target이 들어가야할 인덱스 반환
C: O(logn)의 알고리즘 사용해야 함
E: - `target`이 `nums`에 존재하는 경우 → 해당 인덱스 반환
   - `target`이 `nums`에 없는 경우:
     - `nums`의 값보다 작거나 같은 위치에 삽입 → 해당 위치의 인덱스 반환
     - `nums`의 모든 값보다 클 경우 → `nums.length` 반환

algo: 선형 탐색
ds: 배열

solution:
1. `nums`에 `target`이 존재하는지 확인 (`includes`)
   - 존재하면 해당 인덱스 반환 (`indexOf`)
2. `nums`를 순회하며 `target`이 들어갈 적절한 위치 찾기
   - `nums[i]`가 `target`보다 크거나 같으면 해당 위치 반환
   - 끝까지 도달하면 `nums.length` 반환 (배열 끝에 삽입)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
        return i;
      }
      if (i === nums.length - 1) {
        return nums.length;
      }
    }
  }
};
