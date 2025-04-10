function solution(n) {
  const result = (n * (n + 1)) / 2;
  let currentNum = 1;
  let [minX, maxX, minY, maxY] = [0, n - 1, 0, n - 1];

  const array = [];
  for (let i = 0; i < n; i++) {
    const subArr = Array.from({ length: i + 1 }, () => 0);
    array.push(subArr);
  }

  function moveToBottom() {
    for (let i = minX; i <= maxX; i++) {
      array[i][minY] = currentNum;
      currentNum++;
    }

    minX++;
    minY++;
  }

  function moveToRight() {
    for (let i = minY; i <= maxY; i++) {
      array[maxX][i] = currentNum;
      currentNum++;
    }

    maxY--;
    maxX--;
  }

  function moveToDia() {
    let i = maxX;
    for (let j = maxY; j >= minY; j--) {
      array[i][j] = currentNum;
      currentNum++;
      i--;
    }

    minX++;
    maxY--;
  }

  while (currentNum <= result) {
    moveToBottom();
    moveToRight();
    moveToDia();
  }

  return array.reduce((acc, cur) => {
    acc.push(...cur);
    return acc;
  }, []);
}
