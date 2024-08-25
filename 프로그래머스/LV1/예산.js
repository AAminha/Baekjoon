function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;

  for (const price of d) {
    if (budget - price >= 0) {
      count++;
      budget -= price;
    } else {
      break;
    }
  }

  return count;
}
