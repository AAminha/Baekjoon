function solution(n) {
  let firstPrev = 0;
  let secondPrev = 1;
  let result;

  for (let i = 2; i <= n; i++) {
    result = (firstPrev + secondPrev) % 1234567;
    firstPrev = secondPrev;
    secondPrev = result;
  }

  return result;
}
