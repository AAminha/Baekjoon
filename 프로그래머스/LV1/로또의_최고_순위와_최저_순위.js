function solution(lottos, win_nums) {
  let zeroCount = 0;
  let matchCount = 0;
  for (const number of lottos) {
    if (number === 0) {
      zeroCount++;
    } else if (win_nums.includes(number)) {
      matchCount++;
    }
  }

  const maxRank =
    7 - (zeroCount + matchCount) < 7 ? 7 - (zeroCount + matchCount) : 6;
  const minRank = 7 - matchCount < 7 ? 7 - matchCount : 6;
  return [maxRank, minRank];
}
