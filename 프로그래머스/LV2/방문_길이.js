function solution(dirs) {
  const LIMIT = 5;
  const move = { U: [1, 0], D: [-1, 0], R: [0, 1], L: [0, -1] };
  const road = new Set();
  const current = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    const newX = current[0] + move[dirs[i]][0];
    const newY = current[1] + move[dirs[i]][1];

    if (0 > Math.abs(newX) || Math.abs(newX) > LIMIT) continue;
    if (0 > Math.abs(newY) || Math.abs(newY) > LIMIT) continue;

    road.add(JSON.stringify(current) + JSON.stringify([newX, newY]));
    road.add(JSON.stringify([newX, newY]) + JSON.stringify(current));
    current[0] = newX;
    current[1] = newY;
  }

  return road.size / 2;
}
