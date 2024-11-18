function solution(n, works) {
  const workObj = {};
  works.forEach((work) => (workObj[work] = (workObj[work] || 0) + 1));

  while (n > 0) {
    const keys = Object.keys(workObj);
    if (keys === 0) return 0;

    const maxWork = Math.max(...keys);
    if (workObj[maxWork] > n) {
      workObj[maxWork] -= n;
      if (Number(maxWork) > 0)
        workObj[Number(maxWork) - 1] = (workObj[Number(maxWork) - 1] || 0) + n;
      n = 0;
    } else {
      n -= workObj[maxWork];
      if (Number(maxWork) > 0)
        workObj[Number(maxWork) - 1] =
          (workObj[Number(maxWork) - 1] || 0) + workObj[maxWork];
      delete workObj[maxWork];
    }
  }

  return Object.keys(workObj).reduce((sum, work) => {
    sum += Number(work) ** 2 * workObj[work];
    return sum;
  }, 0);
}
