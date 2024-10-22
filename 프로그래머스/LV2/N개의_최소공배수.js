function solution(arr) {
  while (arr.length > 1) {
    const num1 = arr.pop();
    const num2 = arr.pop();
    const gcm = find_gcm(num1, num2);
    arr.push((num1 * num2) / gcm);
  }

  return arr.pop();
}

function find_gcm(num1, num2) {
  let maxNum = Math.max(num1, num2);
  let minNum = Math.min(num1, num2);

  while (true) {
    const remainder = maxNum % minNum;
    if (remainder == 0) {
      return minNum;
    }

    maxNum = minNum;
    minNum = remainder;
  }
}
