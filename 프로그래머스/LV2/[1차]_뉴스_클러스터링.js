function solution(str1, str2) {
  //const token1 = []
  //const token2 = []
  const tokenObj = {};
  const regex = /[a-zA-Z0-9]/;

  for (let i = 0; i < str1.length - 1; i++) {
    const token = (str1[i] + str1[i + 1]).toLowerCase();
    if (token.search(/[^a-z]/g) === -1) {
      if (!tokenObj[token]) {
        tokenObj[token] = [0, 0];
      }
      tokenObj[token][0] += 1;
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const token = (str2[i] + str2[i + 1]).toLowerCase();
    if (token.search(/[^a-z]/g) === -1) {
      if (!tokenObj[token]) {
        tokenObj[token] = [0, 0];
      }
      tokenObj[token][1] += 1;
    }
  }

  let intersection = 0;
  let union = 0;

  Object.keys(tokenObj).forEach((token) => {
    union += Math.max(...tokenObj[token]);
    intersection += Math.min(...tokenObj[token]);
  });

  return Math.floor(
    (intersection + union === 0 ? 1 : intersection / union) * 65536
  );
}
