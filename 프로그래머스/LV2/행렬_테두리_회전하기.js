function solution(rows, columns, queries) {
  let num = 1;
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push([]);
    for (let j = 0; j < columns; j++) {
      arr[i].push(num);
      num++;
    }
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i];
    const temp = arr[x1 - 1][y1 - 1];
    let minimum = temp;

    // 이동
    // 왼
    for (let x = x1; x < x2; x++) {
      const num = arr[x][y1 - 1];
      arr[x - 1][y1 - 1] = num;
      minimum = Math.min(minimum, num);
    }
    // 아래
    for (let y = y1; y < y2; y++) {
      const num = arr[x2 - 1][y];
      arr[x2 - 1][y - 1] = num;
      minimum = Math.min(minimum, num);
    }

    // 오른
    for (let x = x2 - 2; x > x1 - 2; x--) {
      const num = arr[x][y2 - 1];
      arr[x + 1][y2 - 1] = num;
      minimum = Math.min(minimum, num);
    }

    // 위
    for (let y = y2 - 2; y > y1 - 2; y--) {
      const num = arr[x1 - 1][y];
      arr[x1 - 1][y + 1] = num;
      minimum = Math.min(minimum, num);
    }

    // 이동 완료
    result.push(minimum);
    arr[x1 - 1][y1] = temp;
  }

  return result;
}
