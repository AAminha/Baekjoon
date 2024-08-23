function solution(wallpaper) {
  lux = 50;
  luy = 50;
  rdx = 0;
  rdy = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] == "#") {
        lux = lux > i ? i : lux;
        luy = luy > j ? j : luy;
        rdx = rdx < i ? i : rdx;
        rdy = rdy < j ? j : rdy;
      }
    }
  }

  return [lux, luy, rdx + 1, rdy + 1];
}
