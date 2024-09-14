function solution(k, m, score) {
  score.sort().reverse();
  let sum = 0;

  for (let i = m - 1; i < score.length; i += m) {
    sum += score[i] * m;
  }

  return sum;
}
