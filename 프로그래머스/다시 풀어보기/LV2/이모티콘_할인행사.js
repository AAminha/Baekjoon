function solution(users, emoticons) {
  const combination = [];
  const result = [];

  function dfs(emoticon, discount) {
    combination.push([emoticon, discount]);

    if (emoticon === emoticons.length - 1) {
      let plus = 0;
      let price = 0;

      for (let i = 0; i < users.length; i++) {
        let sum = 0;
        for (let j = 0; j < combination.length; j++) {
          if (users[i][0] <= combination[j][1]) {
            sum +=
              (emoticons[combination[j][0]] * (100 - combination[j][1])) / 100;
          }
        }

        if (sum >= users[i][1]) {
          plus++;
        } else {
          price += sum;
        }
      }

      result.push([plus, price]);
    } else {
      for (let i = 1; i <= 4; i++) {
        dfs(emoticon + 1, i * 10);
      }
    }

    combination.pop();
    return;
  }

  for (let i = 1; i <= 4; i++) {
    dfs(0, i * 10, emoticons.length, combination, result);
  }

  result.sort((a, b) => {
    if (a[0] - b[0] === 0) {
      return b[1] - a[1];
    }

    return b[0] - a[0];
  });

  return result[0];
}
