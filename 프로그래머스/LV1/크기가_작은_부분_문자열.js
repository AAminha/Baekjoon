function solution(t, p) {
  let count = 0;
  const length = p.length;
  const num = Number(p);

  for (let i = 0; i < t.length - length + 1; i++) {
    if (Number(t.slice(i, i + length)) <= num) {
      count++;
    }
  }

  return count;
}
