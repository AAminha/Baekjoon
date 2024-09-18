function solution(sequence, k) {
  let left = 0;
  let right = 0;
  let sum = sequence[0];
  const result = [];

  while (right < sequence.length) {
    if (sum < k) {
      right++;
      sum += sequence[right];
    } else if (sum > k) {
      sum -= sequence[left];
      left++;
    } else {
      result.push([left, right]);
      right++;
      sum += sequence[right];
    }
  }

  return result.sort(compare)[0];
}

function compare(a, b) {
  const length = a[1] - a[0] - (b[1] - b[0]);
  if (length !== 0) return length;

  return a[0] - b[0];
}
