function solution(n, l, r) {
  let count = 0;

  for (let i = l - 1; i < r; i++) {
    let share = i;
    let isZero = false;
    while (share > 0) {
      if (share % 5 === 2) {
        isZero = true;
        break;
      }
      share = Math.floor(share / 5);
    }
    if (!isZero) count++;
  }

  return count;
}
