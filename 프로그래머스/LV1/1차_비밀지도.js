function solution(n, arr1, arr2) {
  const map1 = [];
  const map2 = [];
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const result = Array.from({ length: n }, () => 0);
    let count = 0;

    while (arr1[i] > 1) {
      result[count] = arr1[i] % 2;
      arr1[i] = Math.floor(arr1[i] / 2);
      count++;
    }
    result[count] = arr1[i];
    result.reverse();
    map1.push(result);
  }

  for (let i = 0; i < arr2.length; i++) {
    const result = Array.from({ length: n }, () => 0);
    let count = 0;

    while (arr2[i] > 1) {
      result[count] = arr2[i] % 2;
      arr2[i] = Math.floor(arr2[i] / 2);
      count++;
    }
    result[count] = arr2[i];
    result.reverse();
    map2.push(result);
  }

  for (let i = 0; i < map1.length; i++) {
    for (let j = 0; j < map1[0].length; j++) {
      if (map2[i][j] == 1) {
        map1[i][j] = 1;
      }
    }
    result.push(map1[i].join("").replaceAll("1", "#").replaceAll("0", " "));
  }

  return result;
}
