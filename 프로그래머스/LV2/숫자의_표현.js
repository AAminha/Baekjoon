// 투포인터 이용

function solution(n) {
  const limit = Math.ceil(n / 2);
  const numbers = Array.from({ length: limit + 1 }, (_, i) => i);
  let left = 1;
  let right = 1;
  let count = 1;
  let sum = numbers[left];

  if (n === 1) {
    return count;
  }

  while (right <= limit) {
    if (sum === n) {
      count++;
      left++;
      right = left + 1;

      if (right <= limit) {
        sum = numbers[left] + numbers[right];
      }
    } else if (sum < n) {
      right++;
      if (right <= limit) {
        sum += numbers[right];
      }
    } else {
      sum -= numbers[left];
      left++;
    }
  }

  return count;
}
