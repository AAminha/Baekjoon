function solution(k, dungeons) {
  let result = 0;

  function calculate(total, array) {
    let count = 0;
    for (const num of array) {
      if (total >= dungeons[num][0]) {
        total -= dungeons[num][1];
        count++;
      }
    }

    return count;
  }

  function permutation(current, check) {
    if (current.length === check.length) {
      result = Math.max(calculate(k, current), result);
      return;
    }

    for (let i = 0; i < check.length; i++) {
      if (!check[i]) {
        current.push(i);
        check[i] = true;
        permutation(current, check);
        current.pop();
        check[i] = false;
      }
    }
  }

  permutation(
    [],
    Array.from({ length: dungeons.length }, () => false)
  );

  return result;
}
