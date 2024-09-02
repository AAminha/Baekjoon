function solution(numbers) {
  const result = Array.from({ length: numbers.length }, () => -1);
  let maxNum = -1;

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (maxNum <= numbers[i]) {
      maxNum = numbers[i];
    } else {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
          result[i] = numbers[j];
          break;
        } else if (numbers[i] < result[j]) {
          result[i] = result[j];
          break;
        }
      }
    }
  }

  return result;
}
