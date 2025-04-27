function solution(n, wires) {
  const trees = {};
  for (let i = 1; i <= n; i++) {
    trees[i] = [];
  }
  wires.forEach(([node1, node2]) => {
    trees[node1].push(node2);
    trees[node2].push(node1);
  });

  let result = n;
  for (let i = 0; i < wires.length; i++) {
    const [root1, root2] = wires[i];
    result = Math.min(result, bfs(trees, root1, root2));
  }

  return result;
}

function bfs(trees, root1, root2) {
  const visited = Array(Object.keys(trees).length).fill(false);
  const need_visited = [root1];
  let count1 = 0;
  let count2 = 0;

  while (need_visited.length) {
    const node = need_visited.shift();
    if (!visited[node - 1]) {
      visited[node - 1] = true;
      count1++;
    } else {
      continue;
    }

    trees[node].forEach((next) => {
      if (!visited[next - 1] && next !== root2) need_visited.push(next);
    });
  }

  need_visited.push(root2);
  while (need_visited.length) {
    const node = need_visited.shift();
    if (!visited[node - 1]) {
      visited[node - 1] = true;
      count2++;
    } else {
      continue;
    }

    trees[node].forEach((next) => {
      if (!visited[next - 1] && next !== root1) need_visited.push(next);
    });
  }

  return Math.abs(count1 - count2);
}
