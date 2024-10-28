function solution(X, Y) {
  const count = {};
  const partners = [];

  for (const num of X) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const num of Y) {
    if (count[num]) {
      partners.push(Number(num));
      count[num] -= 1;
    }
  }

  if (partners.length === 0) return "-1";

  partners.sort((a, b) => b - a);
  if (partners[0] === 0) return "0";
  return partners.join("");
}
