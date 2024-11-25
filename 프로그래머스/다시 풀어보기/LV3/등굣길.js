function solution(m, n, puddles) {
  const NUM = 1000000007;
  const dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0));
  puddles.forEach(([x, y]) => (dp[y][x] = -1));

  dp[0][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
        continue;
      }

      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      if (dp[i][j] >= NUM) dp[i][j] %= NUM;
    }
  }

  return dp[n][m];
}

// 교훈: 문제를 잘 읽자^^
