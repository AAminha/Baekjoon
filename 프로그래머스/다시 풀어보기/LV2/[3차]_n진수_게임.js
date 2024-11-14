function solution(n, t, m, p) {
  const result = [];
  let targetNum = 0;
  let targetNumStr = targetNum.toString(n);
  let index = 0;

  while (result.length < t) {
    for (let i = 0; i < m; i++) {
      let current;
      if (targetNumStr[index]) {
        current = targetNumStr[index];
      } else {
        targetNum++;
        targetNumStr = targetNum.toString(n);
        index = 0;
        current = targetNumStr[index];
      }
      index++;
      if (i === p - 1) result.push(current.toUpperCase());
    }
  }
  return result.join("");
}
