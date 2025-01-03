function solution(k, d) {
  const rad = d ** 2;
  let result = 0;

  for (let i = 0; i <= d; i += k) {
    result += Math.floor((rad - i ** 2) ** 0.5 / k) + 1;
  }

  return result;
}
