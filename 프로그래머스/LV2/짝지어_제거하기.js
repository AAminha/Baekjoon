function solution(s) {
  const stack = [];

  for (const alphabet of s) {
    if (stack.length == 0 || stack[stack.length - 1] !== alphabet) {
      stack.push(alphabet);
    } else {
      stack.pop();
    }
  }

  if (stack.length > 0) return 0;
  return 1;
}
