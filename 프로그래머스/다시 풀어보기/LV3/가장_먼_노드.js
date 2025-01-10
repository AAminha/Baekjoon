function solution(n, edge) {
  const visited = new Array(n).fill(false);
  const weight = new Array(n).fill(Infinity);
  const graph = {};
  edge.forEach(([node1, node2]) => {
    node1--;
    node2--;
    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];

    graph[node1].push(node2);
    graph[node2].push(node1);
  });

  weight[0] = 0;
  while (visited.includes(false)) {
    const minNode = [-1, Infinity];
    visited.forEach((value, index) => {
      if (!value && minNode[1] > weight[index]) {
        minNode[0] = index;
        minNode[1] = weight[index];
      }
    });

    const currentNode = minNode[0];
    visited[currentNode] = true;

    graph[currentNode].forEach((node) => {
      if (visited[node]) return;
      weight[node] = Math.min(weight[node], weight[currentNode] + 1);
    });
  }

  const max = Math.max(...weight);
  return weight.filter((value) => value === max).length;
}

// 다익스트라 말고 다른 방식으로 풀기
