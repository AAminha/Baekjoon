function solution(n) {
  const result = [];

  hanoi(n, 0, 2, result);

  return result;
}

function hanoi(num, start, target, result) {
  const rest = 3 - start - target;
  const cols = [[], [], []];
  cols[start] = Array.from({ length: num }, (_, i) => i + 1);

  if (num == 1) {
    result.push([start + 1, target + 1]);
    return;
  }

  hanoi(num - 1, start, rest, result);
  result.push([start + 1, target + 1]);
  hanoi(num - 1, rest, target, result);
}
