function solution(ingredient) {
  let result = 0;
  const stack = [];

  for (const i of ingredient) {
    stack.push(i);
    if (stack.slice(-4).join("") == "1231") {
      result++;
      stack.splice(-4);
    }
  }

  return result;
}
