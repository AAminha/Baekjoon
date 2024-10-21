function solution(brown, yellow) {
  console.log((brown - 4) / 2);
  for (let height = 1; height <= (brown - 4) / 2; height++) {
    const width = (brown - 4) / 2 - height;

    if (width * height === yellow) {
      return [width + 2, height + 2];
    }
  }
}
