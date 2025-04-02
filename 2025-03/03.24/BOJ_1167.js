const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

/**
 * @type {Map<number, Map<number, number>>}
 */
const tree = new Map();

// O(1) -> Map 연산은 기본적으로 O(1)
const addEdge = (u, v, weight) => {
  if (!tree.has(u)) tree.set(u, new Map());
  if (!tree.has(v)) tree.set(v, new Map());

  if (!tree.get(u).has(v)) tree.get(u).set(v, weight);
  if (!tree.get(v).has(u)) tree.get(v).set(u, weight);
};

// O(V+E) -> V: 정점 개수, E: 간선 개수
const dfs = (node, parent, dist) => {
  let farthestNode = node;
  let maxDist = dist;

  for (const [neighbor, weight] of tree.get(node)) {
    if (neighbor !== parent) {
      const [newFarthestNode, newMaxDist] = dfs(neighbor, node, dist + weight);
      if (newMaxDist > maxDist) {
        farthestNode = newFarthestNode;
        maxDist = newMaxDist;
      }
    }
  }

  return [farthestNode, maxDist];
};

function solution(inputs) {
  const V = +inputs[0];

  for (let v = 1; v <= V; v++) {
    let idx = 0;

    const arr = inputs[v]
      .split(" ")
      .map((el) => Number(el.trim()))
      .slice(0, -1);

    const u = arr[idx++];
    // O(E) -> 간선이 추가되므로 간선의 개수만큼의 시간 복잡도를 가짐
    while (idx < arr.length) {
      addEdge(u, arr[idx++], arr[idx++]);
    }
  }

  // 첫 번째 DFS: 임의의 노드(1번 노드)에서 가장 먼 노드 A를 찾음
  const [farthestNodeA, _] = dfs(1, -1, 0);

  // 두 번째 DFS: 노드 A에서 가장 먼 노드 B를 찾고, 그 거리가 트리의 지름이 됨
  const [, treeDiameter] = dfs(farthestNodeA, -1, 0);

  console.log(treeDiameter);
}

solution(inputs);
