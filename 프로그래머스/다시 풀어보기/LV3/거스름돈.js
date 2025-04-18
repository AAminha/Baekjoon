function solution(n, money) {
  const counts = Array(n + 1).fill(0);
  counts[0] = 1;

  for (let i = 0; i < money.length; i++) {
    const unit = money[i];
    for (let i = unit; i <= n; i++) {
      counts[i] += counts[i - unit];
    }
  }

  return counts[n];
}
