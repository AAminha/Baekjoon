function solution(numbers, target) {
  // DFS
  let count = 0;

  function dfs(currentIndex, currentResult) {
    if (currentIndex === numbers.length - 1) {
      if (target === currentResult) count++;
      return;
    }

    const num = numbers[currentIndex + 1];
    dfs(currentIndex + 1, currentResult + num);
    dfs(currentIndex + 1, currentResult - num);
  }

  dfs(-1, 0);

  return count;
}
