function solution(m, n, board) {
  // 배열 바꾸기
  const newBoard = Array.from({ length: n }, () => []);
  board.forEach((block) => {
    for (let i = 0; i < n; i++) {
      newBoard[i].unshift(block[i]);
    }
  });

  // 제거할 요소 찾기
  let count = 0;
  while (true) {
    let deleted = new Set([]);
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < newBoard[i].length - 1; j++) {
        if (
          isDeleted(
            newBoard[i][j],
            newBoard[i][j + 1],
            newBoard[i + 1][j],
            newBoard[i + 1][j + 1]
          )
        ) {
          deleted
            .add(`${i}-${j}`)
            .add(`${i}-${j + 1}`)
            .add(`${i + 1}-${j}`)
            .add(`${i + 1}-${j + 1}`);
        }
      }
    }

    if (deleted.size === 0) break;
    deleted = [...deleted].sort((a, b) => {
      const numa = a.split("-").map(Number)[1];
      const numb = b.split("-").map(Number)[1];
      return numb - numa;
    });

    // 제거
    count += deleted.length;
    deleted.forEach((item) => {
      const [x, y] = item.split("-").map(Number);
      newBoard[x].splice(y, 1);
    });
  }

  return count;
}

function isDeleted(a, b, c, d) {
  return a.repeat(4) === a + b + c + d;
}
