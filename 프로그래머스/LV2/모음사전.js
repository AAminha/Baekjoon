function solution(target) {
  const tokens = ["U", "O", "I", "E", "A"];
  const visited = new Set();
  const needVisited = [];
  let result = 0;

  for (const token of tokens) {
    needVisited.push(token);
  }

  while (needVisited.length > 0) {
    const str = needVisited.pop();
    result++;

    if (target === str) {
      return result;
    }

    if (str.length === 5) continue;

    for (const token of tokens) {
      needVisited.push(str + token);
    }
  }
}
