function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (i != 0) {
      for (let j = i - 1; j >= 0; j--) {
        if (s[i] == s[j]) {
          answer.push(i - j);
          break;
        } else if (j == 0) {
          answer.push(-1);
        }
      }
    } else {
      answer.push(-1);
    }
  }
  return answer;
}
