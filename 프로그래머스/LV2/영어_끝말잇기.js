function solution(n, words) {
  const check = new Set();
  check.add(words[0]);

  for (let i = 1; i < words.length; i++) {
    if (words[i - 1].slice(-1) !== words[i][0] || check.has(words[i])) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    } else {
      check.add(words[i]);
    }
  }

  return [0, 0];
}
