function solution(food) {
  const sw = [];
  const opponent = [];

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < parseInt(food[i] / 2); j++) {
      sw.push(i);
      opponent.unshift(i);
    }
  }

  const result = sw.concat(0, opponent);

  return result.join("");
}
