function solution(s) {
  const numToEn = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let en = "";
  let result = "";
  const keys = Object.keys(numToEn);

  for (const str of s) {
    if (isNaN(parseInt(str))) {
      en += str;

      if (keys.includes(en)) {
        result += numToEn[en];
        en = "";
      } else {
        continue;
      }
    } else {
      result += str;
    }
  }

  return parseInt(result);
}
