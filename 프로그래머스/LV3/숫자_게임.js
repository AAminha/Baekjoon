function solution(A, B) {
  let count = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let bIndex = B.length - 1;
  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] < B[bIndex]) {
      count++;
      bIndex--;

      if (bIndex < 0) break;
    }
  }

  return count;
}
