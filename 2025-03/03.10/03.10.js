function solution(progresses, speeds) {
  let answer = [];

  while (speeds.length > 0) {
    let count = 0;
    for (let i = 0; i < speeds.length; i++) {
      // speeds 원소만큼 Progresses의 원소를 증가시킨다.
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }
    // progresses의 0번째 인덱스가 100이상이면 count를 증가시키고 progresses와 speeds의 0번째 인덱스를 제거한다.
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    if (count > 0) {
      answer.push(count);
    }
  }
  return answer;
}
