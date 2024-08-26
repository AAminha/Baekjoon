function solution(name, yearning, photo) {
  const result = [];
  const hash = new Map();
  name.forEach((n, i) => hash.set(n, yearning[i]));

  for (let i = 0; i < photo.length; i++) {
    let yearningSum = 0;
    for (const name of photo[i]) {
      if (hash.get(name)) {
        yearningSum += hash.get(name);
      }
    }
    result.push(yearningSum);
  }
  return result;
}
