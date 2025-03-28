function solution(n, k) {
  const result = [];
  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const factorial = { 1: 1 };

  for (let i = 2; i < n; i++) {
    factorial[i] = i * factorial[i - 1];
  }

  while (numbers.length > 0) {
    const currentIndex = Math.ceil(k / factorial[n - 1]);
    result.push(numbers.splice(currentIndex - 1, 1)[0]);
    k %= factorial[n - 1];
    n--;
  }

  return result;
}
