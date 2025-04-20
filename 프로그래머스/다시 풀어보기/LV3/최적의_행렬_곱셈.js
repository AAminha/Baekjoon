function solution(m) {
  const len = m.length;
  const dp = Array.from({ length: len }, () => Array(len).fill(1e9));

  for (let i = 0; i < len; i++) {
    dp[i][i] = 0;
  }

  for (let length = 1; length < len; length++) {
    for (let start = 0; start < len - length; start++) {
      for (let k = start; k < start + length; k++) {
        dp[start][start + length] = Math.min(
          dp[start][start + length],
          dp[start][k] +
            dp[k + 1][start + length] +
            m[start][0] * m[k + 1][0] * m[start + length][1]
        );
      }
    }
  }

  return dp[0][len - 1];
}
