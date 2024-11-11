function solution(n, computers) {
  const connection = {};
  const visited = new Array(n).fill(false);
  let networkCount = 0;

  for (let i = 0; i < n; i++) {
    connection[i] = [];
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (computers[i][j] === 1) {
        connection[i].push(j);
        connection[j].push(i);
      }
    }
  }

  function dfs(start) {
    const need_visited = [];
    need_visited.push(start);
    networkCount++;

    while (need_visited.length > 0) {
      const node = need_visited.pop();
      connection[node].forEach((connectedNode) => {
        if (!visited[connectedNode]) need_visited.push(connectedNode);
        visited[connectedNode] = true;
      });
    }
  }

  for (const key in connection) {
    if (!visited[key]) dfs(key);
  }

  return networkCount;
}
