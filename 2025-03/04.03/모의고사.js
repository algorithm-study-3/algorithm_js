/*
I: 숫자가 든 일차원 배열
O: 가장 많은 문제를 맞힌 사람의 번호가 들어있는 배열
C:
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
E:

algo:x
ds:x

solution:
- 수포자 1,2,3이 반복하는 숫자를 각 배열로 만듦.
- answers에 대해서 filter로 숫자가 같을때의 값들을 가진 배열을 가지고, 그 배열의 길이를 각각 구함
- 배열의 길이중 젤 큰거 구함
- 젤 큰 배열의 길이와 동일할때 정답배열에 푸시하고, 정답배열 리턴

*/
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }
  return answer;
}
