function solution(left, right) {
  let result = 0;

  while (left <= right) {
    if (countDivisor(left) % 2 == 0) {
      result += left;
    } else {
      result -= left;
    }

    left++;
  }
  return result;
}

function countDivisor(num) {
  let count = 0;
  let divisor = 1;

  while (divisor <= num) {
    if (num % divisor == 0) {
      count++;
    }
    divisor++;
  }

  return count;
}
