function solution(n) {
  const num = [1, 2, 4];
  let result = '';

  while (true) {
    const rest = (n - 1) % 3;
    const divide = Math.floor((n - 1) / 3);
    result = num[rest] + result;

    if (divide === 0) return result;
    n = divide;
  }

  return result;
}
