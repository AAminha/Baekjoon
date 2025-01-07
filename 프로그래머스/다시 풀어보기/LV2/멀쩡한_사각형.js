function solution(w, h) {
  let result = w * h;
  let max = Math.max(w, h);
  let min = Math.min(w, h);

  const gcd = calculateGcd(max, min);
  max /= gcd;
  min /= gcd;

  const count = countSquare(min, max);

  return result - count * gcd;
}

function calculateGcd(a, b) {
  while (true) {
    const rest = a % b;
    if (rest === 0) return b;

    a = b;
    b = rest;
  }
}

function countSquare(x, y) {
  let count = 0;
  let prevY = 0;
  for (let i = 1; i <= x; i++) {
    const curY = (i * y) / x;
    count += Math.ceil(curY) - Math.floor(prevY);
    prevY = curY;
  }

  return count;
}
