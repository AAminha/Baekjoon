function solution(numbers) {
  const length = numbers.length;
  const numberList = numbers.split("");
  const visited = new Array(length).fill(false);
  const set = new Set();

  function dfs(current) {
    if (current.length > 0 && isPrime(current)) set.add(Number(current));
    if (current.length === length) return;

    for (let i = 0; i < length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(current + numberList[i]);
        visited[i] = false;
      }
    }
  }

  dfs("");

  return set.size;
}

function isPrime(numStr) {
  const number = Number(numStr);

  if (number === 0 || number === 1) return false;
  if (number === 2) return true;

  for (let i = 2; i <= Math.ceil(number ** 0.5); i++) {
    if (number % i === 0) return false;
  }

  return true;
}
