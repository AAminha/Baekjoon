function solution(n) {
  let result = n;
  const count = n.toString(2).split("1").length - 1;

  while (true) {
    result++;
    if (count == result.toString(2).split("1").length - 1) {
      return result;
    }
  }
}
