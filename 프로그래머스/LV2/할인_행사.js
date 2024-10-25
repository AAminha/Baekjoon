function solution(want, number, discount) {
  const list = {};
  let count = 0;

  for (let i = 0; i < want.length; i++) {
    list[want[i]] = number[i];
  }

  for (let i = 0; i < 10; i++) {
    if (list[discount[i]] !== undefined) list[discount[i]] -= 1;
  }

  if (Object.values(list).every((value) => value === 0)) count++;

  for (let i = 10; i < discount.length; i++) {
    if (list[discount[i - 10]] !== undefined) list[discount[i - 10]] += 1;
    if (list[discount[i]] !== undefined) list[discount[i]] -= 1;

    if (Object.values(list).every((value) => value === 0)) count++;
  }

  return count;
}
