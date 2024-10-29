function solution(n, lost, reserve) {
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  lost = new Set(lost.filter((num) => !reserveSet.has(num)));
  reserve = reserve.filter((num) => !lostSet.has(num));

  let result = n - lost.size;

  function borrow(lenderIndex) {
    if (lenderIndex === reserve.length) {
      result = Math.max(result, n - lost.size);
      return;
    }

    const left = reserve[lenderIndex] - 1;
    const right = reserve[lenderIndex] + 1;

    // 안 빌려줄 때
    borrow(lenderIndex + 1);

    // 왼쪽 친구한테 빌려줄 때
    if (lost.has(left)) {
      lost.delete(left);
      borrow(lenderIndex + 1);
      lost.add(left);
    }

    // 오른족 친구한테 빌려줄 때
    if (lost.has(right)) {
      lost.delete(right);
      borrow(lenderIndex + 1);
      lost.add(right);
    }
  }

  if (reserve.length > 0) borrow(0);

  return result;
}
