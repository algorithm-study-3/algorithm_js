// I: 숫자 배열
// O: 숫자 배열
// C: arr.length <= 1,000,000 (자연수)
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
// E: 

// algo: 
// ds: 스택, 큐

// solution: 


function solution(arr) {
  const stack = [];
  for (const number of arr) {
    if (stack[stack.length - 1] !== number) {
      stack.push(number);
    }
  }
  return stack;
}