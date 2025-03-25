function solution(data, col, row_begin, row_end) {
  // sort 메서드는 브라우저마다 다르게 동작 => 시간복잡도가 다름
  // 최악의 시간 복잡도는 O(nlogn)
  data.sort((a, b) => {
    const a_col = a[col - 1];
    const b_col = b[col - 1];
    if (a_col !== b_col) {
      return a_col - b_col;
    } else {
      return b[0] - a[0];
    }
  });

  let current = 0;
  for (let i = row_begin - 1; i < row_end; i++) {
    const s = data[i].reduce((acc, cur) => (acc += cur % (i + 1)), 0);
    current = current ^ s;
  }

  return current;
}
