function solution(diffs, times, limit) {
  let [min_diff, max_diff] = diffs.reduce(
    (acc, cur) => {
      if (acc[0] > cur) {
        acc[0] = cur;
      } else if (acc[1] < cur) {
        acc[1] = cur;
      }
      return acc;
    },
    [diffs[0], diffs[0]]
  );

  limit -= times[0];
  const times_sum = [times[0]];
  for (let i = 1; i < times.length; i++) {
    times_sum.push(times[i] + times[i - 1]);
    limit -= times[i];
  }

  let min_level = max_diff;
  while (min_diff <= max_diff) {
    const mid = Math.floor((min_diff + max_diff) / 2);
    const result = diffs.reduce((acc, cur, idx) => {
      let count = cur - mid;
      if (count < 0) count = 0;
      acc += count * times_sum[idx];
      return acc;
    }, 0);

    if (result === limit) return mid;

    if (result > limit) {
      min_diff = mid + 1;
    } else {
      max_diff = mid - 1;
      min_level = Math.min(min_level, mid);
    }
  }
  return min_level;
}
