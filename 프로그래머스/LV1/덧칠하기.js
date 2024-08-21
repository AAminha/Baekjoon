function solution(n, m, section) {
  let count = 0;
  let currentIndex = 0;

  while (section[currentIndex] <= n) {
    count++;

    // 다 칠했는지 확인하기
    if (
      currentIndex == section.length - 1 ||
      section[section.length - 1] < section[currentIndex] + m
    )
      break;

    // 다음 칠할 곳 확인하기
    for (let i = currentIndex + 1; i < section.length; i++) {
      if (section[i] >= section[currentIndex] + m) {
        currentIndex = i;
        break;
      }
    }
  }

  return count;
}
