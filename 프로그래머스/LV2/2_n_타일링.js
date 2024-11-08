function solution(n) {
  const NUM = 1000000007;
  let prev = 1;
  let cur = 2;
  let index = 2;

  if (n === 1) return prev;

  if (n === 2) return cur;

  while (index < n) {
    [prev, cur] = [cur, prev + cur];
    index++;
    if (cur >= NUM) cur %= NUM;
  }

  return cur;
}
