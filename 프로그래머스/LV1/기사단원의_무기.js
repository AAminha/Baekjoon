function solution(number, limit, power) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    const count = find_divisor_count(i);

    if (count > limit) {
      sum += power;
    } else {
      sum += count;
    }
  }

  return sum;
}

function find_divisor_count(n) {
  const limit = Math.ceil(n ** 0.5);
  const divisor = new Set();

  for (let i = 1; i <= limit; i++) {
    if (n % i === 0) {
      divisor.add(i);
      divisor.add(n / i);
    }
  }

  return divisor.size;
}
