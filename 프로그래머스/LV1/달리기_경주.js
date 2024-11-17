function solution(players, callings) {
  const playerObj = {};

  players.forEach((name, index) => (playerObj[name] = index));

  callings.forEach((name) => {
    const order = playerObj[name];
    const player = players[order - 1];

    playerObj[name] = order - 1;
    playerObj[player] = order;

    players[order] = player;
    players[order - 1] = name;
  });

  return players;
}
