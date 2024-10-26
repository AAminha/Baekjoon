function solution(participant, completion) {
  const completionObj = {};

  for (const player of completion) {
    completionObj[player] = (completionObj[player] || 0) + 1;
  }

  for (const player of participant) {
    if (!completionObj[player]) {
      return player;
    } else {
      completionObj[player] -= 1;
    }
  }
}
