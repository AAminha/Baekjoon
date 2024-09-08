function solution(x, y, n) {
  const dp = Array.from({ length: y + 1 }, () => 0);

  for (let i = y - 1; i >= x; i--) {
    let min = -1;

    if (i + n <= y && dp[i + n] + 1 > 0) {
      min = min == -1 ? dp[i + n] + 1 : Math.min(min, dp[i + n] + 1);
    }

    if (2 * i <= y && dp[2 * i] + 1 > 0) {
      min = min == -1 ? dp[2 * i] + 1 : Math.min(min, dp[2 * i] + 1);
    }

    if (3 * i <= y && dp[3 * i] + 1 > 0) {
      min = min == -1 ? dp[3 * i] + 1 : Math.min(min, dp[3 * i] + 1);
    }

    dp[i] = min;
  }

  return dp[x];
}
