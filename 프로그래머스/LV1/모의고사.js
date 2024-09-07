function solution(answers) {
  const user = [
    [[1, 2, 3, 4, 5], 0],
    [[2, 1, 2, 3, 2, 4, 2, 5], 0],
    [[3, 3, 1, 1, 2, 2, 4, 4, 5, 5], 0],
  ];

  const winner = [];
  let maxCount = 0;

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < user.length; j++) {
      if (user[j][0][i % user[j][0].length] === answers[i]) {
        user[j][1]++;
      }
    }
  }

  for (let i = 0; i < user.length; i++) {
    if (maxCount < user[i][1]) {
      winner.length = 0;
      winner.push(i + 1);
      maxCount = user[i][1];
    } else if (maxCount == user[i][1]) {
      winner.push(i + 1);
    }
  }

  return winner;
}
