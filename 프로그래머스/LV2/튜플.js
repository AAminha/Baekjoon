function solution(s) {
  const array = s
    .slice(2, -2)
    .split("},{")
    .map((item) => item.split(",").map(Number))
    .sort((a, b) => a.length - b.length);
  return array.reduce(
    (acc, cur) => [...acc, ...cur.filter((item) => !acc.includes(item))],
    []
  );
}
