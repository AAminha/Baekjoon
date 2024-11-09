function solution(n, k) {
  const baseArr = n
    .toString(k)
    .split("0")
    .filter((num) => !!num);
  return baseArr.reduce((count, current) => {
    if (isPrime(Number(current))) count++;
    return count;
  }, 0);
}

function isPrime(num) {
  if (num === 1) return false;
  if (num <= 3) return true;

  for (let i = 2; i <= Math.ceil(num ** 0.5); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
