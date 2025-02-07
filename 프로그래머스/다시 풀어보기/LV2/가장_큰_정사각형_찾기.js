function solution(board) {
  let maxDiagonal = 0;

  for (let i = 0; i < board.length; i++) {
    if (board[i][0] > 0) {
      maxDiagonal = board[i][0];
      break;
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    if (board[0][i] > 0) {
      maxDiagonal = board[0][i];
      break;
    }
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] === 0) continue;
      const min = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);

      if (min > 0) {
        board[i][j] = min + 1;
        maxDiagonal = Math.max(maxDiagonal, board[i][j]);
      }
    }
  }

  return maxDiagonal ** 2;
}
