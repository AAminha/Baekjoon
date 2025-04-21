function solution(N, road, K) {
  const map = {};
  const costs = Array(N).fill(1e9);
  const visited = Array(N).fill(false);
  let result = 0;

  for (let i = 0; i < N; i++) map[i] = [];

  road.forEach(([start, end, cost]) => {
    map[start - 1].push([end - 1, cost]);
    map[end - 1].push([start - 1, cost]);
  });

  costs[0] = 0;
  const need_visited = [0];

  while (need_visited.length > 0) {
    const node = need_visited.pop();
    const current_cost = costs[node];

    visited[node] = true;
    if (current_cost <= K) result++;

    map[node].map(([end, cost]) => (costs[end] = Math.min(costs[end], current_cost + cost)));

    const next = [-1, 1e9];
    for (let i = 0; i < N; i++) {
      if (!visited[i] && next[1] > costs[i]) {
        next[0] = i;
        next[1] = costs[i];
      }
    }

    if (next[0] > -1) need_visited.push(next[0]);
  }

  return result;
}
