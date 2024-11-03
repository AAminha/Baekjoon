function solution(msg) {
  const index = {};
  const result = [];
  for (let i = 65; i <= 90; i++) {
    index[String.fromCharCode(i)] = i - 64;
  }

  let word = "";
  for (let i = 0; i < msg.length; i++) {
    word = msg[i];
    for (let j = i + 1; j < msg.length; j++) {
      word += msg[j];
      if (!index[word]) {
        result.push(index[word.slice(0, -1)]);
        index[word] = Object.keys(index).length + 1;
        i = j - 1;
        break;
      }
      i++;
    }
  }
  result.push(index[word]);

  return result;
}
