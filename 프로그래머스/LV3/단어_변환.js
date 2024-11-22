function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const need_visited = [];
  const visited = {};

  need_visited.push(begin);
  visited[begin] = 0;

  while (need_visited.length > 0) {
    const current = need_visited.shift();

    if (current === target) return visited[target];

    words.forEach((word) => {
      if (isNext(current, word) && visited[word] === undefined) {
        need_visited.push(word);
        visited[word] = visited[current] + 1;
      }
    });
  }

  return 0;
}

function isNext(word, target) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== target[i]) {
      count++;
      if (count > 1) return false;
    }
  }

  return true;
}
