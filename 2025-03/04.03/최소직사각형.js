/*
I: [가로,세로]가 있는 일차원 배열
O: 직사각형 넓이
C:
sizes의 길이는 1 이상 10,000 이하입니다.
sizes의 원소는 [w, h] 형식입니다.
w는 명함의 가로 길이를 나타냅니다.
h는 명함의 세로 길이를 나타냅니다.
w와 h는 1 이상 1,000 이하인 자연수입니다.

E: x

ds: x
algo: x

solution:
- 배열을 돌면서 항상 w가 크도록 세팅
- for 배열의 길이만큼
  - if(w길이가 maxW보다 크면) maxW 갱신
  - if (h길이 maxH보다크면 ) maxH 갱신
- maxW, maxH 둘이 곱한값 린턴

*/
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  for (let [w, h] of rotated) {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  }
  return maxSize[0] * maxSize[1];
}
