function solution(maps) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const need_visited = [];
  const result = [];
  need_visited.push([0, 0, 1]); // x, y, count

  while (need_visited.length > 0) {
    const [x, y, count] = need_visited.shift();

    if (x === maps.length - 1 && y === maps[0].length - 1) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX < 0 || newX >= maps.length || newY < 0 || newY >= maps[0].length)
        continue;

      if (maps[newX][newY] === 1) {
        maps[newX][newY] = 0;
        need_visited.push([newX, newY, count + 1]);
      }
    }
  }

  return -1;
}
