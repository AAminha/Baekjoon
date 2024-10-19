function solution(n) {
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (find_prime_number(i)) {
      count++;
    }
  }

  return count;
}

function find_prime_number(n) {
  if (n == 1) return false;
  if (n <= 3) return true;

  const limit = Math.ceil(n ** 0.5) + 1;

  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
