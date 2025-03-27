/*
I:다리의 길이, 견딜수있는 무게, 트럭 별 무게(배열)
O 최소 몇초가 걸리는지 (int)
C:
bridge_length는 1 이상 10,000 이하입니다.
weight는 1 이상 10,000 이하입니다.
truck_weights의 길이는 1 이상 10,000 이하입니다.
모든 트럭의 무게는 1 이상 weight 이하입니다.
E:

algo:x
ds:queue

solution:
ex)
0     / /7856
1     / 7/856
2  7/ /856
3  7/8/56
4 78/ /56
5 78/5/6
6 78/56/
7 785/6/
8 7856/ / 
=> 그래서 8초

큐의 형태 = [[나갈시간,현무게],[나갈시간, 현무게]...]
- while문으로 대기트럭 큐가 빌때까지 반복
    - 큐에있는거가 나갈시간이 됐으면 큐에서 빼준다.
    - 트럭 리스트 앞에있는거가 가능한 무게이면 [나갈시간,무게]를 큐에 넣어준다
    - 시간을 증가시킨다


*/

function solution(bridge_length, weight, truck_weights) {
  let curTime = 0;
  let queue = [[0, 0]];
  let curWeight = 0;

  while (queue.length > 0 || truck_weights > 0) {
    if (queue[0][0] == curTime) {
      const [carTime, carWeigth] = queue.shift();
      curWeight -= carWeigth;
    }
    let possibleWeight = weight - curWeight;
    if (possibleWeight >= truck_weights[0]) {
      const carWeigth = truck_weights.shift();
      curWeight += carWeigth;
      queue.push([curTime + bridge_length, carWeigth]);
    }
    curTime++;
  }
  return curTime;
}
