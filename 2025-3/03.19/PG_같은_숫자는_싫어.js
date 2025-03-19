// 1번째 풀이 방식
function solution(arr) {
  let idx = 0;
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== answer[idx]) {
      answer.push(arr[i]);
      idx += 1;
    }
  }

  return answer;
}

// 2번째 풀이 방식 - 1번째 방식에서 idx 제거
function solution(arr) {
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== answer[answer.length - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// 다른 사람 풀이 방식
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
