function solution(s) {
  const numbers = s.split(" ");
  const result = [numbers[0], numbers[0]];

  for (let i = 1; i < numbers.length; i++) {
    if (parseInt(result[0]) > parseInt(numbers[i])) {
      result[0] = numbers[i];
    } else if (parseInt(result[1]) < parseInt(numbers[i])) {
      result[1] = numbers[i];
    }
  }

  return result.join(" ");
}
