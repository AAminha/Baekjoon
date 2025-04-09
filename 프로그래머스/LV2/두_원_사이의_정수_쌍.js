function solution(r1, r2) {
  let count = 0;
  const double_r1 = r1 ** 2;
  const double_r2 = r2 ** 2;

  for (let x = 1; x <= r2; x++) {
    const double_x = x ** 2;
    const bottom = x < r1 ? Math.ceil((double_r1 - double_x) ** 0.5) : 0;
    const top = Math.floor((double_r2 - double_x) ** 0.5);
    count += top - bottom + 1;
  }

  return count * 4;
}
