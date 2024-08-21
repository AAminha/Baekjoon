function solution(k, score) {
  const fame = [];
  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (fame.length < k) {
      fame.push(score[i]);
    } else if (fame[0] < score[i]) {
      fame[0] = score[i];
    }
    fame.sort((a, b) => a - b);
    result.push(fame[0]);
  }

  return result;
}
