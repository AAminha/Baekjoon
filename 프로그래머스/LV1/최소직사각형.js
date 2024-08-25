function solution(sizes) {
  let width = 0;
  let height = 0;

  for (let i = 0; i < sizes.length; i++) {
    const max = Math.max(...sizes[i]);
    const min = Math.min(...sizes[i]);

    width = Math.max(width, max);
    height = Math.max(height, min);
  }

  return width * height;
}
