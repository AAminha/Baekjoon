function solution(a, b, n) {
  let rest = n;
  let count = 0;

  while (rest >= a) {
    // rest에서 마트에 주는 병 개수 빼기
    const toMart = parseInt(rest / a);
    rest -= toMart * a;

    // rest에 마트에서 준 병 개수 더하기
    rest += toMart * b;
    count += toMart * b;
  }

  return count;
}
