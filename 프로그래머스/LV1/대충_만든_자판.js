function solution(keymap, targets) {
  const shortest = {};
  const result = [];

  for (const keys of keymap) {
    for (let i = 0; i < keys.length; i++) {
      if (!shortest[keys[i]]) {
        shortest[keys[i]] = i + 1;
      } else {
        shortest[keys[i]] = Math.min(shortest[keys[i]], i + 1);
      }
    }
  }

  for (const target of targets) {
    let sum = 0;
    for (const char of target) {
      if (!shortest[char]) {
        sum = -1;
        break;
      } else {
        sum += shortest[char];
      }
    }
    result.push(sum);
  }

  return result;
}
