// 다익스트라인 것 같은데 cost가 동일하면 무조건 BFS로 풀 것
function solution(n, roads, sources, destination) {
  const map = {};
  for (let i = 1; i <= n; i++) {
    map[i] = [];
  }

  roads.forEach(([a, b]) => {
    map[a].push(b);
    map[b].push(a);
  });

  // current = destination으로 시작
  // current 인접 노드 need_visited

  const visited = Array.from({ length: n + 1 }, () => -1); // -1이면 아직 방문 X
  visited[destination] = 0;
  const need_visited = [destination];

  while (need_visited.length > 0) {
    const current = need_visited.shift();
    const cost = visited[current];
    map[current].forEach((node) => {
      if (visited[node] === -1) {
        visited[node] = cost + 1;
        need_visited.push(node);
      }
    });
  }

  return sources.map((index) => visited[index]);
}
