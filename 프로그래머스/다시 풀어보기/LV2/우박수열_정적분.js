function solution(k, ranges) {
  const points = [k];
  const areas = [0];
  const results = [];

  while (k > 1) {
    const prev = k;
    if (k % 2 === 0) k = k / 2;
    else k = k * 3 + 1;

    points.push(k);
    areas.push(areas[areas.length - 1] + (prev + k) * 0.5);
  }

  const x_range = points.length - 1;
  for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    if (start === 0 && end === 0) {
      results.push(areas[x_range]);
      continue;
    }

    let limit = end + x_range;

    const area = getAreaSum(areas, start, limit);
    results.push(area);
  }

  return results;
}

function getAreaSum(areas, start, end) {
  if (start > end || areas.lenght - 1 < end) return -1;
  if (start === end) return 0;

  return areas[end] - areas[start];
}
