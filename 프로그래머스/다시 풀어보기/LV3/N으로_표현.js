function solution(N, number) {
  const results = Array.from({ length: 9 }, () => new Set());

  for (let i = 1; i < 9; i++) {
    results[i].add(Number(String(N).repeat(i)));

    for (let j = 1; j <= Math.ceil(i / 2); j++) {
      results[i - j].forEach((num1) => {
        results[j].forEach((num2) => {
          const cals = [num1 + num2, num1 - num2, num1 * num2, Math.ceil(num1 / num2)];
          cals.forEach((cal) => {
            if (cal > 0) results[i].add(cal);
          });
        });
      });

      if (results[i].has(number)) return i;
    }
  }

  return -1;
}
