function solution(k, tangerine) {
  const count = new Map();

  for (const tan of tangerine) {
    if (count.has(tan)) {
      count.set(tan, count.get(tan) + 1);
    } else {
      count.set(tan, 1);
    }
  }

  const sorted = [...count].sort((a, b) => b[1] - a[1]);
  let index = 0;
  while (k > 0) {
    k -= sorted[index][1];
    index++;
  }

  return index;
}
