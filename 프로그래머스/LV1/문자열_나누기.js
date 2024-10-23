function solution(s) {
  let result = 0;
  let startIndex = 0;

  let countX = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[startIndex] == s[i]) {
      countX++;
    } else {
      count++;
    }

    if (countX == count) {
      result++;
      startIndex = i + 1;
    }
  }

  if (startIndex < s.length) {
    result++;
  }

  return result;
}
