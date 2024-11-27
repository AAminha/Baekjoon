function solution(n, s, a, b, fares) {
  // 플로이드-워셜
  const shortest = Array.from(new Array(n), () => new Array(n).fill(Infinity));
  shortest.forEach((array, index) => (array[index] = 0));

  fares.forEach(([node1, node2, cost]) => {
    shortest[node1 - 1][node2 - 1] = cost;
    shortest[node2 - 1][node1 - 1] = cost;
  });

  // i가 중간 지점
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      const route1 = shortest[j][i];
      if (route1 === Infinity) continue;
      for (let k = j + 1; k < n; k++) {
        const result = Math.min(shortest[j][k], route1 + shortest[i][k]);
        shortest[j][k] = result;
        shortest[k][j] = result;
      }
    }
  }

  let result = Infinity;
  for (let i = 0; i < n; i++) {
    const sum = shortest[s - 1][i] + shortest[a - 1][i] + shortest[b - 1][i];
    result = Math.min(sum, result);
  }

  return result;
}
