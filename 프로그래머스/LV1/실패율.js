function solution(N, stages) {
  const game = {};
  const failureRate = [];
  let user = stages.length;

  for (let i = 1; i <= N + 1; i++) {
    game[i] = 0;
  }

  for (let i = 0; i < stages.length; i++) {
    game[stages[i]]++;
  }

  for (let i = 1; i < N + 1; i++) {
    failureRate.push([i, game[i] / user]);
    user -= game[i];
  }

  failureRate.sort((a, b) => {
    const compare = a[1] - b[1];

    if (compare !== 0) return compare * -1;

    return a[0] - b[0];
  });

  return failureRate.map((arr) => arr[0]);
}
