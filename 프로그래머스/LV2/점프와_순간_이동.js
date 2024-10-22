function solution(n) {
  let count = 1;

  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      count++;
      n = (n - 1) / 2;
    }
  }

  return count;
}
