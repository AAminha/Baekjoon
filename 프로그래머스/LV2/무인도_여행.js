function solution(maps) {
  const result = [];
  maps = maps.map((string) => string.split(''));

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (Number(maps[i][j]) > 0) {
        result.push(countFood(maps, i, j));
      }
    }
  }

  if (result.length === 0) return [-1];
  return result.sort((a, b) => a - b);
}

function countFood(maps, a, b) {
  const direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const needVisited = [[a, b]];
  let sum = Number(maps[a][b]);
  maps[a][b] = 0;

  while (needVisited.length > 0) {
    const [x, y] = needVisited.shift();

    for (let i = 0; i < direction.length; i++) {
      const nx = x + direction[i][0];
      const ny = y + direction[i][1];

      if (nx < 0 || nx > maps.length - 1 || ny < 0 || ny > maps[0].length - 1) {
        continue;
      }

      if (Number(maps[nx][ny]) > 0) {
        sum += Number(maps[nx][ny]);
        maps[nx][ny] = 0;
        needVisited.push([nx, ny]);
      }
    }
  }
  return sum;
}
