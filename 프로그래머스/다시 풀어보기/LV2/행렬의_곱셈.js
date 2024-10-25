function solution(arr1, arr2) {
  const result = Array.from({ length: arr1.length }, () => []);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let calResult = 0;
      for (let k = 0; k < arr2.length; k++) {
        calResult += arr1[i][k] * arr2[k][j];
      }
      result[i].push(calResult);
    }
  }

  return result;
}
