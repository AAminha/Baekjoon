function solution(citations) {
  citations.sort((a, b) => b - a);

  let result = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i + 1) {
      result = Math.max(result, citations[i]);
    } else {
      result = Math.max(result, i + 1);
    }
  }

  return result;
}
