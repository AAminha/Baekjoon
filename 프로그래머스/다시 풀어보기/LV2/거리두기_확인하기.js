const SIZE = 5;

function solution(places) {
  return places.reduce((acc, cur) => {
    const result = check(cur);
    acc.push(result);
    return acc;
  }, []);
}

function check(array) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      const partition = new Array(4).fill(false);
      const flag = array[i][j];
      if (flag === 'O' || flag === 'X') continue;

      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];

        if (nx < 0 || nx > SIZE - 1 || ny < 0 || ny > SIZE - 1) {
          partition[k] = true;
          continue;
        }
        if (array[nx][ny] === 'P') return 0;
        if (array[nx][ny] === 'X') {
          partition[k] = true;
        }
      }

      for (let k = 0; k < 4; k++) {
        if (partition[k]) continue;

        const nx = i + dx[k] * 2;
        const ny = j + dy[k] * 2;

        if (nx < 0 || nx > SIZE - 1 || ny < 0 || ny > SIZE - 1) continue;
        if (array[nx][ny] === 'P') return 0;
      }

      let nx;
      let ny;

      nx = i + 1;
      ny = j + 1;
      if (
        nx < SIZE &&
        ny < SIZE &&
        !(partition[0] && partition[2]) &&
        array[nx][ny] === 'P'
      ) {
        return 0;
      }

      nx = i + 1;
      ny = j - 1;
      if (
        nx < SIZE &&
        ny > -1 &&
        !(partition[0] && partition[3]) &&
        array[nx][ny] === 'P'
      ) {
        return 0;
      }

      nx = i - 1;
      ny = j + 1;
      if (
        nx > -1 &&
        ny < SIZE &&
        !(partition[1] && partition[2]) &&
        array[nx][ny] === 'P'
      ) {
        return 0;
      }

      nx = i - 1;
      ny = j - 1;
      if (
        nx > -1 &&
        ny > -1 &&
        !(partition[1] && partition[3]) &&
        array[nx][ny] === 'P'
      ) {
        return 0;
      }
    }
  }

  return 1;
}
